import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarraComponent } from './shared/barra/barra.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { ServiciosPostComponent } from './servicios/components/servicios-post/servicios-post.component';
import { ServiciosPutComponent } from './servicios/components/servicios-put/servicios-put.component';
import { ServiciosGetComponent } from './servicios/components/servicios-get/servicios-get.component';
import { ClientePostComponent } from './cliente/components/cliente-post/ClientePostComponent';
import { ClienteGetComponent } from './cliente/components/cliente-get/cliente-get.component';
import { ClientePutComponent } from './cliente/components/cliente-put/cliente-put.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    HeaderComponent,
    NavComponent,
    ServiciosPutComponent,
    ServiciosPostComponent,
    ServiciosGetComponent,
    ClientePostComponent,
    ClienteGetComponent,
    ClientePutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // Agrega HttpClientModule a la lista de importaciones

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
