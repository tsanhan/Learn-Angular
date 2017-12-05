import { Component ,ViewChild, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-derived-form-assignment',
  templateUrl: './template-derived-form-assignment.component.html',
  styleUrls: ['./template-derived-form-assignment.component.css']
})
export class TemplateDerivedFormAssignmentComponent implements OnInit {
  @ViewChild ('refForm') refForm: NgForm
  defaultSubscription = 'advanced';
  formSubmited:boolean = false;
  formObj= {
    email: '',
    password: '',
    subscription: ''
  }
  
  submitMethod(){
    this.formSubmited = true;
    this.formObj.email = this.refForm.value.email;
    this.formObj.password = this.refForm.value.password;
    this.formObj.subscription = this.refForm.value.subscription;
  }
  constructor(){
    
  }

  ngOnInit(){

  }
  }
  