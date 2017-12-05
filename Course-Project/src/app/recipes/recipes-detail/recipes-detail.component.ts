import { Recipe } from './../recipe.model';
import { Component, OnInit} from '@angular/core';
import {RecipeService} from './../recipe.service';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  //@Input() recElem: Recipe;
  recElem:Recipe;
  recipeId:number = 0;
 paramsSubscription: Subscription;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    

    this.paramsSubscription = this.route.params.subscribe(
      (params:Params) => {
          this.recipeId = +params['id'];
          this.recElem = this.recipeService.getRecipe(this.recipeId);
      }
    )
  }

  addToShoppingList () {
      this.recipeService.addIngredientToShoppingList(this.recElem.ingredients);
  }

  delete(){
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }
}
