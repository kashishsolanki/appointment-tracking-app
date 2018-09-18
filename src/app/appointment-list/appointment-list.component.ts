/**
 * AppointmentListComponent with appointment list and its logical part
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../shared/appointment.service';
import { Appointment } from './appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(private router: Router, private appointmentService: AppointmentService) { }

  id: any = 10;
  appointmentList: Appointment[];

  ngOnInit() {
    this.loadAppointmentSlots();
  }

  loadAppointmentSlots(){
    if(localStorage.getItem('appointmentList')){
      this.appointmentService.loadAppointmentsFromStorage().subscribe(res => {
        this.appointmentList = res;
      }, err => {
        console.log(err);
      });
    }
    else{
      this.appointmentService.getAppointments().subscribe(res => {
        this.appointmentList = res;
        localStorage.setItem('appointmentList', JSON.stringify(res));
      },
      err => {
        console.log(err);
      });
    }
  }

}
