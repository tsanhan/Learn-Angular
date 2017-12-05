import { AuthModule } from './../auth/auth.module';
import { SharedModule } from './../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeEditComponent,
        RecipesDetailComponent,
        RecipeStartComponent,
        RecipesItemComponent,
        RecipesListComponent
        
    ],
    imports:[
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingModule,
        SharedModule,
        AuthModule
    ]
})
export class RecipesModule {}//this is a feature module;