import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormArray} from '@angular/forms';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames:string[] = ['Chris','Anna'];

  constructor() {

   }

  ngOnInit() {

    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),//when calling forbiddenNames 'this' will be called by angular, this will be null. we need to bind the function refrence to the 'this' object. 
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),//no need to bind forbiddenEmails to this because i dont use 'this' in the validator
      }),
     'gender': new FormControl('male'),
     'hobbies': new FormArray([])
    })

    //I can listen to value changes
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    //Or Status Changes
    // this.signupForm.statusChanges.subscribe(
    //   (value) => console.log(value)
    // );

    //setting the full form with a single json object
  // this.signupForm.setValue({
  //   'userData':{
  //     'username': 'Max',
  //     'email': 'max@test.com'
  //   },
  //   'gender':'male',
  //   'hobbies':[]
  // });

  //stting a single value in the form
  // this.signupForm.patchValue({
  //   'userData':{
  //     'username': 'Anna'
  //   }
  // })


  }
  
  onSubmit(){
    console.log(this.signupForm);
    var c = this.signupForm.controls.userData.get('email').valid;
    this.signupForm.reset();//reseting the form
    
  }

  onAddHobbie(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  //sync validator
  forbiddenNames(control:FormControl):{[s: string]: boolean}{
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return { 'nameIsForbidden' : true};
    }
    // not to return  return { 'nameIsForbidden' : false};
    return null;
  }

  //Async Validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any> ((resolve,reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true})
        }
        resolve(null);
      }, 1500);
    });
    return promise;
  }
}
