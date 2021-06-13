import { Component, ViewChild, ElementRef, OnInit  } from '@angular/core';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent  implements OnInit{
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 12.971563787658825;
  lng = 80.24625420570375;
  constructor(private titleService :Title,
    private apiServ : AppService) {
    apiServ.pageTitleSrc.next('CompanyDetails');
    this.titleService.setTitle( 'Company-List' );
   }

  ngOnInit(): void {
  }

  markers = [
    {
      position: new google.maps.LatLng(12.971563787658825, 80.24625420570375),
      map: this.map,
      title: "#110, PERUNGUDI #600003 CHENNAI India"
    }
  ];

  //Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  //Default Marker
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: "Hello World!"
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


}
