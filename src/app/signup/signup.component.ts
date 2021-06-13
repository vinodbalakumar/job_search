import { Component, OnInit } from '@angular/core';
import { CommonHeaderComponent } from '../common-header/common-header.component';
import { AppService } from '../app.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[CommonHeaderComponent]
})
export class SignupComponent implements OnInit {
  dynamicForm: FormGroup;
  dynamicFormEr: FormGroup;
  submitted = false;
  user_type : string = 'employee' ;
  //firstName = new FormControl("", Validators.required);

  
  constructor(private titleService: Title ,
    private apiServ : AppService,private formBuilder: FormBuilder) {
   
    this.titleService.setTitle( 'sign-up' );
   }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      uname: ['', Validators.required],
      email: ['', Validators.required],
  });
      
  this.dynamicFormEr = this.formBuilder.group({
    uname: ['', Validators.required],
    email: ['', Validators.required],
});

}

      reset()
      {
        this.dynamicForm.reset()
      }
      resetEr()
      {
        this.dynamicFormEr.reset()
      }

      setEmployee(){
        this.user_type='employee';
      }

      setEmployer(){
        this.user_type='employer'
      }

      onSubmit() {
        this.submitted = true;
        console.log(this.submitted,'sub')
        // stop here if form is invalid
        
       console.log(JSON.stringify(this.dynamicForm.value, null, 4))
        if (this.dynamicForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
        // display form values on success
       console.log(JSON.stringify(this.dynamicForm.value, null, 4))
    }

    onSubmitEr() {
      this.submitted = true;
      console.log(this.submitted,'sub')
      // stop here if form is invalid
      
     console.log(JSON.stringify(this.dynamicFormEr.value, null, 4))
      if (this.dynamicFormEr.invalid) {
          return;
      }
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicFormEr.value, null, 4));
      // display form values on success
     console.log(JSON.stringify(this.dynamicFormEr.value, null, 4))
  }

}
