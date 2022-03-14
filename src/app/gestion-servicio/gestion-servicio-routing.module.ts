import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { TicketPendientesComponent } from './ticket-pendientes/ticket-pendientes.component';
import { TicketResueltosComponent } from './ticket-resueltos/ticket-resueltos.component';

const routes: Routes = [
  { path: 'categorias',component:CategoriasComponent},
  { path: 'ticket-pendientes',component:TicketPendientesComponent},
  { path: 'ticket-resueltos',component:TicketResueltosComponent},
  //Para una pagina que no se encuentra
  { path: '**', redirectTo:'categorias'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionServicioRoutingModule { }
