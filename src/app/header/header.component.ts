import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHeaderComponent } from '../common-header/common-header.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[CommonHeaderComponent]
})
export class HeaderComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  
  }

}
