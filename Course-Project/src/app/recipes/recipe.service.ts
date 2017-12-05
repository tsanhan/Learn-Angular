import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();
    constructor(private slService: ShoppingListService, private http: Http) {}
    private recipes: Recipe[] = []
    // [
    //     new Recipe('schnitzel',
    //         'schnitzel yammy',
    //         'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
    //         [
    //             new Ingredient('chicken', 1),
    //             new Ingredient('chips', 2)

    //         ]),
    //     new Recipe('burger',
    //         'burger yammy',
    //         'http://www.seriouseats.com/recipes/assets_c/2017/05/20170412-vanilla-layer-cake-vicky-wasik-23-thumb-300xauto-437772.jpg'
    //         , [


    //             new Ingredient('cow', 1),
    //             new Ingredient('bread', 2)
    //         ])];



    getRecipes(): Recipe[] {
        return this.recipes.slice();
        
    }

    getRecipe(id: number): Recipe {
        return this.getRecipes()[id]; }

    addIngredientToShoppingList(Ingredients: Ingredient[]){
        this.slService.addListToIngredients(Ingredients); }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice()); }

    deleteRecipe(index: number){
       
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice()); }

    updateRecipe(index: number, recipe:Recipe){
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice()); }

    

    setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice()); }
      
}
