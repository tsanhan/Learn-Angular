import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SuccessAlertComponent} from './Assignment1/success_alert/success_alert.component';
import {WarningAlertComponent} from './Assignment1/warning_alert/warning_alert.component';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UsernameComponent } from './Assignment2/username/username.component';
import { DisplayDetailsComponent } from './Assignment3/display-details/display-details.component';



@NgModule({
  declarations: [
    AppComponent,SuccessAlertComponent, WarningAlertComponent, ServerComponent, ServersComponent, UsernameComponent, DisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
