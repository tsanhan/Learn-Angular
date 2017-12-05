import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit ,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit ,OnDestroy{

  ingredients: Ingredient[] = [];
  private subscription: Subscription

  select(id:number)
  {
    this.shoppingListService.statredEditing.next(id);
  }

  constructor(private shoppingListService: ShoppingListService) {

   }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.listChanged.subscribe(
      (list: Ingredient[]) => this.ingredients = list
    );

    
}
ngOnDestroy(){
  this.subscription.unsubscribe();//we have to unsibscribe because we using OUR OWN subscription
}
}
