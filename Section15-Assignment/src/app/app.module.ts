import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TemplateDerivedFormAssignmentComponent } from './template-derived-form-assignment/template-derived-form-assignment.component';
import { ReactiveFormAssignmentComponent } from './reactive-form-assignment/reactive-form-assignment.component';

const routs: Routes =[ 
  { path: '', redirectTo:'ReactiveFormAssignment',pathMatch:'full'},
  { path: 'TDFormAssignment',component: TemplateDerivedFormAssignmentComponent},
  { path: 'ReactiveFormAssignment',component: ReactiveFormAssignmentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TemplateDerivedFormAssignmentComponent,
    ReactiveFormAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
