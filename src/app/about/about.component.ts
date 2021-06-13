import { Component, OnInit } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[CommonHeaderComponent]
})
export class AboutComponent implements OnInit {
  // public pageTitle : string = 'about';
   
  constructor(private common :CommonHeaderComponent,
    private apiServ : AppService,private titleService:Title) {
    apiServ.pageTitleSrc.next('about');
    this.titleService.setTitle( 'about' );
   }

  ngOnInit(): void {
   
  }

}
