import { Component, OnInit } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';
import { AppService } from '../app.service';
import { Title }     from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[CommonHeaderComponent]
})
export class LoginComponent implements OnInit {

  public pageTitle : string = 'login';
  constructor(private titleService: Title ,
    private apiServ: AppService) {
    apiServ.pageTitleSrc.next(this.pageTitle);
    this.titleService.setTitle( 'Login' );
   // apiServ.pageTitleSrc.next({name:'ram',pswd:'email'});
   }

  ngOnInit(): void {
 
  }
  
    
  

}
