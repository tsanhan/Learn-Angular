import { CoreModule } from './core/core.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
//import { RecipesModule } from './recipes/recipes.module';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    //RecipesModule,
    SharedModule,
    AuthModule,
    ShoppingModule,
    CoreModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
