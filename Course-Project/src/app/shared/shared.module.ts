import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';
//shared module, typicaly an app has only one shared module
// to share all the resurses across the feature modules 
@NgModule({
    declarations: [
        DropdownDirective//we declare DropdownDirective because everything in the app must be declared once!
    ],
    exports:[
        CommonModule,
        DropdownDirective//we export DropdownDirective because we want to use this from outside the module
        //by default everythig in a module is not accessable from outside the module
    ]
})
export class SharedModule{}