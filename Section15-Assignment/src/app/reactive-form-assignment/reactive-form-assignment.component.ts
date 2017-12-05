import { CustomValidators } from './../custom-validators';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'

import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.css']
})
export class ReactiveFormAssignmentComponent implements OnInit {

  signupForm:FormGroup;
  statusArray: any =['Stable','Critical', 'Finished'];
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null,
                                    [Validators.required, CustomValidators.invalidProjectName],
                                    CustomValidators.asyncForbiddenName),
      'mail': new FormControl(null,[Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    })

  }


  onSubmit(){
    console.log(this.signupForm.value);
  }
  
  

  
}
