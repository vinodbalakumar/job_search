import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiring-companies',
  templateUrl: './hiring-companies.component.html',
  styleUrls: ['./hiring-companies.component.css']
})
export class HiringCompaniesComponent implements OnInit {
  responsiveOptions :any[];
  constructor() { 

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];




  }
  cars :any[];
  ngOnInit(): void {

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
        "vin":"39980f30",
        "brand":"Volkswagen",
        "year":1986,
        "color":"Red"
    },
    {
      "vin":"39980f30",
      "brand":"Volkswagen",
      "year":1986,
      "color":"Red"
  },
  {
    "vin":"39980f30",
    "brand":"Volkswagen",
    "year":1986,
    "color":"Red"
}
    ]




  }

}
