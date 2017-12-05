import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)

    ];

    listChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
    statredEditing: Subject<number> = new Subject<number>();

    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(id: number) {
        return this.ingredients[id];
    }
    addToIngredients(ing: Ingredient) {
        this.ingredients.push(ing);
        this.listChanged.next(this.ingredients.slice());
    }

    addListToIngredients(ings: Ingredient[]) {
        //for(let ing of ings){
        //  this.addToIngredients(ing);
        //}
        this.ingredients.push(...ings);
        this.listChanged.next(this.ingredients.slice());
    }

    removeIngredient(id:number): void {
        this.ingredients.splice(id, 1);
        this.listChanged.next(this.ingredients.slice());
    }
    updateIng(id:number, ing:Ingredient){
        this.ingredients[id] = ing;
        this.listChanged.next(this.ingredients.slice())
    }



}
