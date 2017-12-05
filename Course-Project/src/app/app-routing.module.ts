import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const appRoutes: Routes =[
    // {path: '', redirectTo: '/recipes',pathMatch: 'full'},
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},//, canLoad: [AuthGuard] },//lazy loading with a guard
    {path: 'shopping-list', component: ShoppingListComponent}//no need to create a full routing module just for this single route
    //and it's ok to import it here AND in the ShoppingModule, this it not a double declarations because here the component 
    //does not declared, so to use this route I need to have 'ShoppingListComponent' declared someware
   
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],//<- preloads all lazy loading modules, only after app finished loading. this fix the latency of lazy loading
    exports: [RouterModule]
})
export class AppRoutingModule{}