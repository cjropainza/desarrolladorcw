import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent {

  constructor(private router: Router) { }

  cambiarPag(nombrePagina: string) {
    this.router.navigate([nombrePagina]);
  }


  cambiarPagina(event: any) {
    const paginaSeleccionada = event.target.value;
    this.router.navigate([paginaSeleccionada]);
  }



}
