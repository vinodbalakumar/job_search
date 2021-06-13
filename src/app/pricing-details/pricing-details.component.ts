import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-details',
  templateUrl: './pricing-details.component.html',
  styleUrls: ['./pricing-details.component.css']
})
export class PricingDetailsComponent implements OnInit {

  constructor(private titleService: Title ,
    private apiServ : AppService) {
    apiServ.pageTitleSrc.next('Pricing-details');
    this.titleService.setTitle( 'Pricing-details' );
   }

  ngOnInit(): void {
  }

}
