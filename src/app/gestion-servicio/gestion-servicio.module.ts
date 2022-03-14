import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionServicioRoutingModule } from './gestion-servicio-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { TicketPendientesComponent } from './ticket-pendientes/ticket-pendientes.component';
import { TicketResueltosComponent } from './ticket-resueltos/ticket-resueltos.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    TicketPendientesComponent,
    TicketResueltosComponent
  ],
  imports: [
    CommonModule,
    GestionServicioRoutingModule
  ]
})
export class GestionServicioModule { }
