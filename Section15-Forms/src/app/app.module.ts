import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateDerivedFormComponentComponent } from './template-derived-form-component/template-derived-form-component.component';

const routs: Routes =[ 
  {
    path: '',
    component: TemplateDerivedFormComponentComponent
  },
  {
    path: 'TDForm',
    component: TemplateDerivedFormComponentComponent
  },
  {
    path: 'ReactiveForm',
    component: ReactiveFormComponentComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    TemplateDerivedFormComponentComponent,
    ReactiveFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routs),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
