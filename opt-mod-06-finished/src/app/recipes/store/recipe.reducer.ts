import { Recipe } from '../recipe.model';
import * as RecipesActions from "./recipe.actions";
import { createReducer, on, Action } from '@ngrx/store';
export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: []
};

export function recipeReducerAlt(recipeState: State | undefined, recipeAction: Action) {
  return createReducer(
    initialState,
    on(RecipesActions.addRecipe, (state, action) => ({ ...state, recipes: state.recipes.concat({ ...action.recipe }) })),
    on(
      RecipesActions.updateRecipe,
      (state, action) => {
        return {
          ...state,
          recipes: state.recipes.map(
            (recipe, index) =>
              index === action.index ?
                {
                  ...action.recipe
                }
                : recipe)
        }
      }),
    on(RecipesActions.deleteRecipe, (state, action) => ({ ...state, recipes: state.recipes.filter((recipe, index) => index !== action.index) })),
    on(RecipesActions.setRecipes, (state, action) => ({ ...state, recipes: [...action.recipes] }))
  )(recipeState, recipeAction);
}

// export function recipeReducer(
//   state = initialState,
//   action: RecipesActions.RecipesActions): State {
//   switch (action.type) {
//     case RecipesActions.SET_RECIPES:

//       return {
//         ...state,
//         recipes: [...action.payload]
//       }
//     case RecipesActions.ADD_RECIPE:

//       return {
//         ...state,
//         recipes: [...state.recipes, action.payload]
//       }
//     case RecipesActions.UPDATE_RECIPE:
//       const updatedRecipe = {
//         ...state.recipes[action.payload.index],
//         ...action.payload.newRecipe
//       };
//       const updatedRecipes = [...state.recipes];
//       updatedRecipes[action.payload.index] = updatedRecipe;
//       return {
//         ...state,
//         recipes: updatedRecipes
//       }
//     case RecipesActions.DELETE_RECIPE:
//       return {
//         ...state,
//         recipes: [ ...state.recipes.filter((_,i) => i !== action.payload)]
//       }

//     default:
//       return state;

//   }
// }
