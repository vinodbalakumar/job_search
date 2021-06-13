import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HomeServiceService } from './home-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat : any;
  lng : any;

  private menuItems: any[];
  cars: any[];
  responsiveOptions : any[];
  
 
  constructor(
    private apiServ : AppService,private router :Router,private titleService :Title,
    private autoser :HomeServiceService,private formBuilder: FormBuilder) {
    
    this.titleService.setTitle( 'Home' );
    
    this.responsiveOptions = [
      {
          breakpoint: '720px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '720px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '720px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    this.data();
    this.dataForCategory();
   }



   submitted = false;

   formdata;
   
   country: any;
 
   states: any[];
 
   filteredCountriesSingle: any[];
 
   filteredCountriesMultiple: any[]; 

   filteredBrands: any[];
 
   states_v: any = false;
 
   _countries: any[];
 
 



  ngOnInit(): void {


    this.formdata = new FormGroup({
      country: new FormControl(""),
      states: new FormControl(""),
      cities: new FormControl(""),
      category: new FormControl(""),
      experience: new FormControl(""),
      description : new FormControl("")
    });

  
    this.cars = [
      {
          "vin":"ee8a89d8",
          "brand":"Fiat",
          "year":1987,
          "color":"Maroon"
      },
      {
          "vin":"642b3edc",
          "brand":"Jaguar",
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

     this.findMe();


  }


   findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    console.log('lat :' ,this.lat ,'long :', this.lng);
    this.apiServ.fetchData(`${this.lat},${this.lng}`).then(() => {
      this.apiServ.getDetails(this.lat,this.lng);
    })
    console.log(this.apiServ.location);
    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: ' your current location!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }


  markers = [
    {
      position: new google.maps.LatLng(16.177748, 81.128540),
      map: this.map,
      title: "#VR TOWERS,MACHILIPATNAM  #521002 KRIHNA DST INDIA"
    }
  ];

  //Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(16.177748, 81.128540);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  //Default Marker
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: "Your current Location!"
  });

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    //Adding Click event to default marker
    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    //Adding default marker to map
    this.marker.setMap(this.map);

    //Adding other markers
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({content: marker.getTitle()});

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }
  
 
  items = new Array(50);

  onClickSubmit(data) {
   
    let temp_state : Array<any> = [];
    data.value.states.forEach(element => {

      temp_state.push(element[1]);
    })
    

    let x: homeQuery = {
      country: data.value.country[2],
      states: temp_state,
      category: data.value.passwd1 == '' ||   data.value.passwd1 == undefined ? '' :  data.value.passwd1
  }
    console.log('try :',JSON.stringify(x))    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formdata.value, null, 4));
  }


  countryValidate() {
    
    if (this._countries != undefined && this.country != undefined) {
      let val = this._countries.some(e => e.split("_")[2] === this.country[2]);
      if(!val && this.states != undefined)
      {
       
        this.cities=[]
        this.states=[]
      }
      if(this.formdata.controls.country.value[2] != undefined){
        this.states_v = this.formdata.controls.country.value != undefined && val;
      }
    }
    
    return this.states_v
  }



  
  data() {
    this.autoser.getJSON().subscribe(countries => {
      this._countries = countries.countries;
    });
  }

category :any[];
  dataForCategory() {
    this.autoser.getCategory().subscribe(countries => {
      this.category= [...countries['Functional Area / Department'],...countries["Industry / Sector"]];
    });
  }


  
  filterCountrySingle(event) {
    let query = event.query;
    this.autoser.getJSON().subscribe(countries => {
      this.filteredCountriesSingle = this.filterCountry(query, countries.countries);
    });
  }


  filterCountryMultiple(event) {
    let query = event.query;
    this.autoser.getStates().subscribe(countries => {
      this.filteredCountriesMultiple = this.filterStates(query, countries);
    });
  }

  


  filterStates(query, countries: any): any[] {
    let val : any = this.formdata.controls.country.value[2];
    let c = countries[val];
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    for (let i = 0; i < c.length; i++) {
      let country = c[i];
      if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country.split('_'));

      }
    }
    return filtered;
  }



  filterCountry(query, countries: any[]): any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country.split('_'));

      }
    }
    return filtered;
  }
  


  filteredCountriesMultiple1 :any;
  cities : any[]
  filterCountryCities(event) {
    let query = event.query;
    this.autoser.getCities().subscribe(countries => {
      console.log(countries)
      this.filteredCountriesMultiple1 = this.filterCities(query, countries);
    });
  }

  filterCities(query, countries: any): any[] {
    let val : Array<any> = []; 
    
    this.states.forEach(element => {

      if(val.length > 0){
     val = [...countries[element[1]],...val];
    }
    else{
      val = [...countries[element[1]]];
    }
         });
    
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    for (let i = 0; i < val.length; i++) {
      let country = val[i];
      if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country.split('_'));

      }
    }
    return filtered;
  }


  filteredDesc : any;
  desc :any;
  
  filterJobDesc(event) {
    let query = event.query;
    this.autoser.getDescription().subscribe(countries => {
      this.filteredDesc = this.filterJobDescription(query, countries);
    });
  }


  filterJobDescription(query, countries: any[]): any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country.split('_'));

      }
    }
    return filtered;
  }
   

}



export interface homeQuery{
  country?: string;
  states?: string[];
  cities?: string[];
  category?: string;
}