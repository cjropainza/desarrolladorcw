import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './paginas/angular/angular.component';
import { ReactComponent } from './paginas/react/react.component';
import { VuejsComponent } from './paginas/vuejs/vuejs.component';
import { NavmenuComponent } from './paginas/navmenu/navmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { FavesComponent } from './paginas/faves/faves.component';
import { PagenotfoundComponent } from './paginas/pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    ReactComponent,
    VuejsComponent,
    NavmenuComponent,
    FavesComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
