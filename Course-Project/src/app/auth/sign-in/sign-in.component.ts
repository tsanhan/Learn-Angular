import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password);
    //the return is the token we will use to authenticate
    //when using firebase SDK, there is no need to manualy store the token.
    //firebase is doing that for us
    //we can see the token in: 
    //chrome dev -> 'Application' tab -> 'Local Storage'
  }
}
