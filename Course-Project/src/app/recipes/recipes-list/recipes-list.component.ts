import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';

import { Component, OnInit, OnDestroy } from '@angular/core';
 

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  providers: []
})
export class RecipesListComponent implements OnInit, OnDestroy {
  
  recipesChangedSubscription : Subscription;
recipes:Recipe[];

  constructor(private recipesService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { 
    
  }
ngOnDestroy(){
  this.recipesChangedSubscription.unsubscribe();
}
  ngOnInit() {
    this.recipesChangedSubscription = this.recipesService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
    this.recipes = this.recipesService.getRecipes();
    let key = 'recipes';
    let test = this.recipesService['key'];
  }

  onNewRecipe(){
      this.router.navigate(['new'], {relativeTo: this.route});
  }
}
