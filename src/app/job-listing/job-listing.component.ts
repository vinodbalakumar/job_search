import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {

  constructor(private titleService :Title,
    private apiServ : AppService) {
    apiServ.pageTitleSrc.next('Job-List');
    this.titleService.setTitle( 'Job-List' );
   }

  ngOnInit(): void {
  }

}
