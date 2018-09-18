/*
* AppRoutingModule for set route path and load component as per its route
* 
*/

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/appointment-list', pathMatch: 'full' },
  { path: 'appointment-list', loadChildren: './appointment-list/appointment-list.module#AppointmentListModule' },
  { path: 'appointment-detail', loadChildren: './appointment-detail/appointment-detail.module#AppointmentDetailModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}