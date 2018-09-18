/*
* AppointmentListRoutingModule for set route path and load component as per its route for appointment list
* 
*/

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list.component';

const routes: Routes = [
  { path: '', component: AppointmentListComponent }
  
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppointmentListRoutingModule {}