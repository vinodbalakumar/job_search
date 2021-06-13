import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, BehaviorSubject } from 'rxjs';





@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css'],
  providers:[]

})

export class CommonHeaderComponent implements OnInit {
  pageTitle = '';
  constructor(private apiServ : AppService) {
    apiServ.pageTitle.subscribe( s=> this.pageTitle = s);
   }
  
  ngOnInit(): void {
  }
  
 
}
