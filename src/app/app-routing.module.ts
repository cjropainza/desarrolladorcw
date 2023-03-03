import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './paginas/angular/angular.component';
import { ReactComponent } from './paginas/react/react.component';
import { VuejsComponent } from './paginas/vuejs/vuejs.component';
import { FavesComponent } from './paginas/faves/faves.component';
import { PagenotfoundComponent } from './paginas/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: '', redirectTo: 'angular', pathMatch: 'full'},
  {path: 'angular', component: AngularComponent},
  {path: 'react', component: ReactComponent},
  {path: 'vuejs', component: VuejsComponent},
  {path: 'faves', component: FavesComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
