/**
 * AppointmentService for retrieve or store values about to appointment time slots
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../appointment-list/appointment';
import { APPOINMENTS } from '../appointment-list/mock-time-slots';
import { JsonPipe } from '@angular/common';

@Injectable()
export class AppointmentService {

  constructor() { }

  getAppointments(): Observable<Appointment[]> {
    // get appointment time slots from mock file
    return Observable.of(APPOINMENTS);
  }

  loadAppointments(): Appointment[]{
    // to load localstorage stored appointments as list of Appointment class model
    var appointments: Appointment[] = JSON.parse(localStorage.getItem('appointmentList')) as Appointment[];
    return appointments;
  }

  getAppointment(id: number): Observable<Appointment> {
    // find appointment and return its values
    return Observable.of(this.loadAppointments().find(appointment => appointment.id == parseInt(id.toString()) ));
  }

  loadAppointmentsFromStorage(): Observable<Appointment[]> {
    // load appointment time slot list from localstorage
    return Observable.of(this.loadAppointments());
  }

  updateAppointment(appointment: Appointment): Observable<boolean>{
    // update appointment in stored list of localstorage
    var appointments: Appointment[] = JSON.parse(localStorage.getItem('appointmentList')) as Appointment[];
    let appointmentIndex = appointments.findIndex(appointmentObj => appointmentObj.id == appointment.id);
    if(appointmentIndex >= 0){
      appointments[appointmentIndex] = appointment;
      localStorage.setItem('appointmentList', JSON.stringify(appointments));
      return Observable.of(true);
    }
    return Observable.of(false);
  }
}