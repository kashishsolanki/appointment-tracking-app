/*
* Appointment RoutingModule for set route path and load component as per its route for appointment module
*/

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailComponent } from './appointment-detail.component';

const appointmentRoutes: Routes = [
  { path: '', redirectTo: '/appointment-detail/:id', pathMatch: 'full' },
  { path: 'appointment-detail/:id', component: AppointmentDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(appointmentRoutes) ],
  exports: [ RouterModule ]
})
export class AppointmentRoutingModule {}