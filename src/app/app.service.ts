import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 // public pageTitleSrc = new BehaviorSubject<User>({name:'',pswd:''});
 apiURL: string = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
 apiKey :string ='&key=AIzaSyD86OW3KTU9W6La46FKA-Z1D4lm7xmLTRs';
 details_respo : any;

 public pageTitleSrc = new BehaviorSubject<string>('');
  pageTitle = this.pageTitleSrc.asObservable();


  constructor(private httpClient: HttpClient){
   }




  public location:Location = {
    lat : 0,
    lng :0
  };

  
latlong: any;

  
  
async fetchData(latlong :string){
  const promise = await this.httpClient.get(`${this.apiURL}${latlong}${this.apiKey}`).toPromise();
  this.details_respo = promise 
  return promise
}

public async getDetails(lat :string,log :string)
{ 
  this.location.lat= lat;
  this.location.lng = log;
    if (this.details_respo.status == google.maps.GeocoderStatus.OK) {
      for (var i = 0; i < this.details_respo.results[0].address_components.length; i++) {
        let types = this.details_respo.results[0].address_components[i].types
        if (types.indexOf('locality') != -1) {
          this.location.address_level_2 = this.details_respo.results[0].address_components[i].long_name
        }
        if (types.indexOf('country') != -1) {
          this.location.address_country = this.details_respo.results[0].address_components[i].long_name
        }
        if (types.indexOf('postal_code') != -1) {
          this.location.address_zip = this.details_respo.results[0].address_components[i].long_name
        }
        if (types.indexOf('administrative_area_level_1') != -1) {
          this.location.address_state = this.details_respo.results[0].address_components[i].long_name
        }
      }
    }

    console.log('location :',this.location)
 
}

}

interface Location {
  lat: any;
  lng: any;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
}



