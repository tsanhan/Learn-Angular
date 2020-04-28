import { Ingredient } from '../../shared/ingredient.model';
import { Action, UPDATE, createReducer, on } from '@ngrx/store';
import * as ShoppingListActions from './shopping-list.actions';




export interface State { ingredients: Ingredient[]; editIndex: number; }

const initialState: State = { ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)], editIndex: -1 };




export function shoppingListReducerAlt(shoppingListState: State | undefined, shoppingListAction: Action) {
  return createReducer(
    initialState,
    on(ShoppingListActions.addIngredient, (state, action) => ({ ...state, ingredients: state.ingredients.concat(action.ingredient) })),
    on(ShoppingListActions.addIngredients, (state, action) => ({ ...state, ingredients: state.ingredients.concat(...action.ingredients) })),
    on(ShoppingListActions.updateIngredient, (state, action) => ({...state,editIndex: -1,ingredients: state.ingredients.map((ingredient, index) => index === state.editIndex ? { ...action.ingredient } : ingredient) })),
    on(ShoppingListActions.deleteIngredient, state => ({ ...state, editIndex: -1, ingredients: state.ingredients.filter((ingredient, index) => index !== state.editIndex) })),
    on(ShoppingListActions.startEdit, (state, action) =>
    (
      {
        ...state,
        editIndex: action.index
       })),
    on(ShoppingListActions.stopEdit, state => ({ ...state, editIndex: -1 }))
  )(shoppingListState, shoppingListAction);
}

// export function shoppingListReducer(
//   state: State = initialState,
//   action: ShoppingListActions.ShoppingListActions): State {
//   switch (action.type) {
//     case ShoppingListActions.ADD_INGREDIENT:
//       return {
//         ...state,
//         ingredients: [...state.ingredients, action.payload]
//       }
//     case ShoppingListActions.ADD_INGREDIENTS:
//       return {
//         ...state,
//         ingredients: [...state.ingredients, ...action.payload]
//       }
//     case ShoppingListActions.UPDATE_INGREDIENT:
//       const ingredient = state.ingredients[state.editIndex];
//       const updatedIngredient = {
//         ...ingredient,
//         ...action.payload // overriding relevant props
//       };
//       const updatedIngredients = [...state.ingredients];
//       updatedIngredients[state.editIndex] = updatedIngredient;
//       return {
//         ...state,
//         ingredients: updatedIngredients,
//         editIndex: -1
//       }
//     case ShoppingListActions.DELETE_INGREDIENT:
//       return {
//         ...state,
//         ingredients: state.ingredients.filter((_, i) => i !== state.editIndex)
//       }
//     case ShoppingListActions.START_EDIT:

//       return {
//         ...state,
//         editIndex: action.payload,
//       }
//     case ShoppingListActions.STOP_EDIT:
//       return {
//         ...state,
//         editIndex: -1
//       }
//     default:

//       return state;
//   }
// }
