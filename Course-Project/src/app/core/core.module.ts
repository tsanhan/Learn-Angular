import { AuthService } from './../auth/auth.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations:[
    HeaderComponent,
    HomeComponent
    
],
imports:[
    SharedModule,
    AppRoutingModule
],
providers: [
    RecipeService,
    DataStorageService,
    ShoppingListService, 
    AuthService
  ],
exports:[
    AppRoutingModule,
    HeaderComponent  
]
})
export class CoreModule{

}