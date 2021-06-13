import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {

  constructor(private apiServ :AppService,private titleService :Title) { 
    apiServ.pageTitleSrc.next('CandidatesList');
    this.titleService.setTitle( 'Candidate-list' );
  }

  ngOnInit(): void {
  }

}
