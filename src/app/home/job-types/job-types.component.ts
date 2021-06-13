import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-types',
  templateUrl: './job-types.component.html',
  styleUrls: ['./job-types.component.css']
})
export class JobTypesComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }


  fullTime(): void {
    this.router.navigate(['header/home/full-time']);
  }

}
