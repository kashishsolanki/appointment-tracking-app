# AppointmentTrackingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5 and Angular version 5.2.

> AppointmentTracking App will contain track of time slots with name and phone number information.
> User can set its comfertable time slot with adding basic information and also can update any old already booked time slot information.


## Functionalities

1. User can see list of time slots between 9:00AM to 5:00PM within 1 hour gap.
2. User can select any timeslot and can see detail of that timeslot with first name, last name and phone number fields.
3. Also user can add/update these information from detail screen.
4. On update/add, booked timeslot will show with "Booked" badge and red background color for indicating that this timeslot is already booked.

## Data Store

1. To retrieve data, it will load data as rest API endpoint url. And on start app, it will load appointment time slot list and store in localstorage
2. There is no actual rest API for retrieve/store data.
3. Data will store in localstorage, and add/update information will be done in localstorage data.

## Tools and Technologies

* Technology: HTML, Bootstrap, CSS, Angular-5.

#### This Projects covers all fundamentals of Angular

* Template and DataBinding
* Forms and Form Validation for invalid form
* Multiple Modules
* Routing & Navigation
* Services
* Directives etc.

# Installation

1.  Angular CLI
    * [Download Angular CLI](https://cli.angular.io/)
2.  NodeJs
    * [Download Nodejs](https://nodejs.org/en/download/)
3.  Package Manager - NPM
4.  Clone the repository and run `npm install`
5.  Run the Server with `ng serve`, and can see loaded app in `http://localhost:4200/`