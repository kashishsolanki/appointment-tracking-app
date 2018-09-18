/**
 * AppointmentDetailModule for declarations or imports related to appointment detail screen components and module.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentDetailComponent } from './appointment-detail.component';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    FormsModule
  ],
  declarations: [AppointmentDetailComponent]
})
export class AppointmentDetailModule { }
