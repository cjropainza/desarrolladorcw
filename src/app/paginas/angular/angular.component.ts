import { Component, OnInit } from '@angular/core'; // Importar el decorador Component y OnInit desde el paquete @angular/core
import { HttpClient } from '@angular/common/http'; // Importar el HttpClient desde el paquete @angular/common/http

@Component({
  selector: 'app-angular', // El selector HTML que se usará para agregar este componente
  templateUrl: './angular.component.html', // La plantilla HTML que se usará para mostrar la vista del componente
  styleUrls: ['./angular.component.css'] // Una lista de archivos CSS que se aplicarán al componente
})

export class AngularComponent implements OnInit {

  // Definir algunas variables que se usarán en el componente
  items: any[] = []; // Una lista vacía de artículos
  item: any; // Un objeto para almacenar un artículo seleccionado
  totalPages: number = 0; // El número total de páginas de resultados de búsqueda
  pageIndices: number[] = []; // Una lista de números de página para mostrar en la vista
  favoritos: any[] = []; // Una lista vacía de artículos favoritos

  constructor(private http: HttpClient) { // Inyectar el HttpClient en el constructor
  }

  ngOnInit() {
    this.loadPage(0); // Llamar al método loadPage con el parámetro 0 cuando se inicializa el componente
  }

  loadPage(page: number) {
    // Realizar una solicitud GET a la API de búsqueda de Hacker News
    this.http.get<any>(`https://hn.algolia.com/api/v1/search_by_date?query=angular&page=${page}`)
      .subscribe(data => { // Escuchar la respuesta de la solicitud
        // Mapear los resultados de la búsqueda para agregar una propiedad "favorite" a cada artículo
        this.items = data.hits.map((item: any) => {
          return {
            ...item,
            favorite: false
          };
        });

        // Actualizar el número total de páginas y la lista de números de página
        this.totalPages = data.nbPages;
        this.pageIndices = Array.from({length: this.totalPages}, (_, i) => i + 1);
      });
  }

  // Definir algunos métodos para manejar la paginación de resultados
  currentPage = 1; // La página actual se inicializa en 1
  pageSize = 8; // El número de artículos por página se establece en 8

  changePage(page: number) {
    this.currentPage = page; // Actualizar la página actual
    this.loadPage(page - 1); // Cargar la página correspondiente a la página actual
  }

  getCurrentPageItems() {
    let start = (this.currentPage - 1) * this.pageSize; // Calcular el índice del primer artículo en la página actual
    let end = start + this.pageSize; // Calcular el índice del último artículo en la página actual
    return this.items.slice(start, end); // Devolver una lista de artículos para mostrar en la vista
  }
  // Definir un método para agregar o quitar artículos de la lista de favoritos
  agregarFavorito(item: any) {
    item.active = !item.active; // Cambiar el estado de la propiedad "active" del artículo
    if (item.active) { // Si el artículo se ha marcado como activo
      this.favoritos.push(item);
    } else {
      let index = this.favoritos.findIndex(fav => fav.objectID === item.objectID);
      if (index >= 0) {
        this.favoritos.splice(index, 1);
      }
    }
  }
}
