import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private apiServ :AppService) { 
    apiServ.pageTitleSrc.next('add-post');
  }

  ngOnInit(): void {
  }

}
