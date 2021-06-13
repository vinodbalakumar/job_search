import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-fulltime-jobs',
  templateUrl: './fulltime-jobs.component.html',
  styleUrls: ['./fulltime-jobs.component.css']
})
export class FulltimeJobsComponent implements OnInit {

  title = 'angulardowngrade';
  cars: any[];
  constructor() { }
  
  sortOptions: any[];
  sortKey: string;
  sortField: string;
  sortOrder: number;


  ngOnInit() {

    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Brand', value: 'brand'}
  ];

      this.cars = [
        {
          "vin":"ee8a89d8",
          "brand":"Fiat",
          "year":1987,
          "color":"Maroon"
      },
      {
          "vin":"642b3edc",
          "brand":"Renault",
          "year":1968,
          "color":"White"
      },
      {
          "vin":"19ec7580",
          "brand":"Renault",
          "year":1981,
          "color":"Black"
      },
      {
          "vin":"39980f30",
          "brand":"Volkswagen",
          "year":1986,
          "color":"Red"
      },
      {
          "vin":"ec9cc",
          "brand":"Fiat",
          "year":1981,
          "color":"Brown"
      },
        {
            "vin":"ee8a89d8",
            "brand":"Fiat",
            "year":1987,
            "color":"Maroon"
        },
        {
            "vin":"642b3edc",
            "brand":"Renault",
            "year":1968,
            "color":"White"
        },
        {
            "vin":"19ec7",
            "brand":"Renault",
            "year":1981,
            "color":"Black"
        },
        {
            "vin":"39980",
            "brand":"Volkswagen",
            "year":1986,
            "color":"Red"
        },
        {
            "vin":"ec9cc",
            "brand":"Fiat",
            "year":1981,
            "color":"Brown"
        },
        {
          "vin":"39980",
          "brand":"Volkswagen",
          "year":1986,
          "color":"Red"
      },
      {
          "vin":"ec9cc",
          "brand":"Fiat",
          "year":1981,
          "color":"Brown"
      }
      
      ]



  }

  onDialogHide() {
    this.selectedCar = null;
}
  selectCar(event: Event, car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
}
selectedCar: Car;
    displayDialog: boolean;

  onSortChange(event) {
    let value = event.value;
    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}




}
export interface Car {
  vin;
  year;
  brand;
  color;
}
