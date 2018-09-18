/**
 * AppointmentDetailComponent with appointment detail logical part
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppointmentService } from '../shared/appointment.service';
import { Appointment } from '../appointment-list/appointment';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
              private location: Location,
              private appointmentService: AppointmentService) { }

  appointment: Appointment = new Appointment();
  errorMessage: string = "";

  ngOnInit() {
    this.getAppointment();
  }

  getAppointment(){
    // get id from route parameter
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getAppointmentInformation(id);
  }

  getAppointmentInformation(appointmentId: any){
    // get appointment information based on appointment id
    this.appointmentService.getAppointment(appointmentId).subscribe(res => {
      this.appointment = res;
    }, err => {
      alert(err.json());
    });
  }

  cancelAppointmentForm(){
    // route to back on cancel appointment
    this.location.back();
  }

  submitAppointment(){
    // update appointment into localstorage
    this.appointment.isBooked = true;
    this.appointmentService.updateAppointment(this.appointment).subscribe(res => {
      if(res == true){
        this.location.back();
      }
      else{
        this.errorMessage = "Something went wrong!";
      }
    }, err => {
      console.log(err);
    });
  }

}
