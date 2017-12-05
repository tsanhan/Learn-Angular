import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        AuthRoutingModule,
        CommonModule,
        FormsModule
        ],
    declarations:[    
        SignInComponent,
        SignUpComponent
    ],
   
})
export class AuthModule{

}