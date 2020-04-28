import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import * as RecipesActions from './recipe.actions';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer'
import * as AuthActions from "../../auth/store/auth.actions";

@Injectable()
export class RecipesEffects {
  // @Effect()
  // fetchRecipes = this.actions$.pipe(
  //   ofType(RecipesActions.FETCH_RECIPES),
  //   switchMap(() => {
  //     return this.http.get<Recipe[]>(
  //       'https://learn-angular-ee42f.firebaseio.com/recipes.json'
  //     )

  //   }),
  //   map(recipes => {
  //     return recipes.map(recipe => {
  //       return {
  //         ...recipe,
  //         ingredients: recipe.ingredients ?? []
  //       };
  //     });
  //   }),
  //   map(recipes => {
  //     return new RecipesActions.SetRecipes(recipes);
  //   })
  // )

  fetchRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.fetchRecipes),
      switchMap(() => {
        return this.http.get<Recipe[]>(
          'https://learn-angular-ee42f.firebaseio.com/recipes.json'
        )

      }),
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ?? []
          };
        });
      }),
      map(recipes => {
        return RecipesActions.setRecipes({recipes});
      })
    )
  );

  // @Effect({ dispatch: false })
  // storeRecipes = this.actions$.pipe(
  //   ofType(RecipesActions.STORE_RECIPES),
  //   withLatestFrom(this.store.select('recipes')),
  //   switchMap(([actionsData, recipesState]) => {
  //     return this.http
  //       .put(
  //         'https://learn-angular-ee42f.firebaseio.com/recipes.json',
  //         recipesState.recipes,
  //       )
  //   })
  // )

  storeRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.storeRecipes),
      withLatestFrom(this.store.select('recipes')),
      switchMap(([actionsData, recipesState]) => {
        return this.http
          .put(
            'https://learn-angular-ee42f.firebaseio.com/recipes.json',
            recipesState.recipes,
          )
      })
    ),{ dispatch: false })


  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions,
    private http: HttpClient) {

  }
}



