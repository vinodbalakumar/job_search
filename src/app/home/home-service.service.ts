import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) {
   
  }
  
  public getJSON(): Observable<any> {
      return this.http.get("./assets/json/details/countries.json");
  }
  public getDescription(): Observable<any> {
    return this.http.get("./assets/json/details/jobs_description.json");
  }
  
  
  public getCategory(): Observable<any> {
    return this.http.get("./assets/json/details/jobs_category.json");
  }
  
  public getStates(): Observable<any> {
    return this.http.get("./assets/json/details/states.json");
  }
  
  public getCities(): Observable<any> {
    return this.http.get("./assets/json/details/cities.json");
  }
}
