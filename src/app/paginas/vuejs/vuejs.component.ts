import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vuejs',
  templateUrl: './vuejs.component.html',
  styleUrls: ['./vuejs.component.css']
})

export class VuejsComponent implements OnInit {

  items: any[] = [];
  item: any;
  totalPages: number = 0;
  pageIndices: number[] = [];
  favoritos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadPage(0);
  }

  loadPage(page: number) {
    this.http.get<any>(`https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=${page}`)
      .subscribe(data => {
        this.items = data.hits.map((item: any) => {
          return {
            ...item,
            favorite: false
          };
        });

        this.totalPages = data.nbPages;
        this.pageIndices = Array.from({length: this.totalPages}, (_, i) => i + 1);
      });
  }

  getCurrentPageItems() {
    let start = (this.currentPage - 1) * this.pageSize;
    let end = start + this.pageSize;
    return this.items.slice(start, end);
  }

  currentPage = 1;
  pageSize = 8;

  changePage(page: number) {
    this.currentPage = page;
    this.loadPage(page - 1);
  }

  agregarFavorito(item: any) {
    item.active = !item.active;
    if (item.active) {
      this.favoritos.push(item);
    } else {
      let index = this.favoritos.findIndex(fav => fav.objectID === item.objectID);
      if (index >= 0) {
        this.favoritos.splice(index, 1);
      }
    }
  }
}
