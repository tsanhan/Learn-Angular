import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions'

import { Recipe } from '../recipe.model';

import { Store } from '@ngrx/store';
import * as fromApp from "../../store/app.reducer";
import { map, switchMap, tap } from 'rxjs/operators';
import * as RecipesActions from '../store/recipe.actions'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params['id']),
        tap(id => this.id = +id),
        switchMap(() => this.store.select('recipes')),
        map(x => x.recipes[this.id])
      )
      .subscribe(x => {
        this.recipe = x;
      });
  }

  onAddToShoppingList() {
    this.store.dispatch( ShoppingListActions.addIngredients({ingredients:this.recipe.ingredients}))
    //this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch( RecipesActions.deleteRecipe({index:this.id}))
    // this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
