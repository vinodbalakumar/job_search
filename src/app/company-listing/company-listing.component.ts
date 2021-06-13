import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-company-listing',
  templateUrl: './company-listing.component.html',
  styleUrls: ['./company-listing.component.css']
})
export class CompanyListingComponent implements OnInit {

  constructor(private titleService :  Title,
    private apiServ : AppService) {
    apiServ.pageTitleSrc.next('CompanyListing');
    this.titleService.setTitle( 'Company-List' );
   }

  ngOnInit(): void {
  }

}
