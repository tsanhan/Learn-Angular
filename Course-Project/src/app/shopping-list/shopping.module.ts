import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations:[
        ShoppingEditComponent,
        ShoppingListComponent
        
    ],
    imports:[
        CommonModule,
        FormsModule
    ]
    
})
export class ShoppingModule{

}