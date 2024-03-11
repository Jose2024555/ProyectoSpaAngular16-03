import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosGetComponent } from './servicios/components/servicios-get/servicios-get.component';
import { ServiciosPostComponent } from './servicios/components/servicios-post/servicios-post.component';
import { ServiciosPutComponent } from './servicios/components/servicios-put/servicios-put.component';
import { ClienteGetComponent } from './cliente/components/cliente-get/cliente-get.component';
import { ClientePostComponent } from './cliente/components/cliente-post/ClientePostComponent';
import { ClientePutComponent } from './cliente/components/cliente-put/cliente-put.component';


const routes: Routes = [
{path: 'serviciospost', component:ServiciosPostComponent},
{path: 'serviciosget', component:ServiciosGetComponent},
{path: 'serviciosput', component:ServiciosPutComponent},
{ path: 'clientepost', component: ClientePostComponent },
{ path: 'clienteget', component: ClienteGetComponent },
{ path: 'clienteput', component: ClientePutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
