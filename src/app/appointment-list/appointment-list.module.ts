/**
 * AppointmentListModule file with declarations of appointment list component files
 * 
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list.component';
import { AppointmentListRoutingModule } from './appointment-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppointmentListRoutingModule
  ],
  declarations: [AppointmentListComponent]
})
export class AppointmentListModule { }
