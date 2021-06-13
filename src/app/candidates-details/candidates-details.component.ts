import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-candidates-details',
  templateUrl: './candidates-details.component.html',
  styleUrls: ['./candidates-details.component.css']
})
export class CandidatesDetailsComponent implements OnInit {

  constructor(private apiServ :AppService,private titleService :Title) { 
    apiServ.pageTitleSrc.next('add-post');
    this.titleService.setTitle( 'add-post' );
  }

  ngOnInit(): void {
  }

}
