import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.css']
})
export class ClientReviewComponent implements OnInit {

  constructor(private titleService : Title,  private apiServ :AppService) { 
    apiServ.pageTitleSrc.next('client-review');
    this.titleService.setTitle( 'Client-review' );
  }

  ngOnInit(): void {
  }

}
