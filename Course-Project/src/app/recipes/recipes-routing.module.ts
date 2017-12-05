import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { Routes ,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

const recipeRoutes: Routes =[
    {path: '', component: RecipesComponent , children:[
        {path: '', component: RecipeStartComponent, pathMatch:'full'},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},//need to be before the :id route otherwise the router will try to get number out of 'new'
        {path: ':id', component: RecipesDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
    ]},
];
@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    providers:[AuthGuard],//bacuse this is the only place I use AuthGuard, I can let myself load AuthGuard lazily
    exports: [RouterModule]
})
export class RecipesRoutingModule{

}