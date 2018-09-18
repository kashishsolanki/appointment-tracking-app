/*
 * Main module file with declarations, imports and bootstrap metadata
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentDetailModule } from './appointment-detail/appointment-detail.module';
import { AppointmentListModule } from './appointment-list/appointment-list.module';
import { AppointmentService } from './shared/appointment.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppointmentListModule,
    AppointmentDetailModule
  ],
  bootstrap: [AppComponent],
  providers: [AppointmentService]
})
export class AppModule { }
