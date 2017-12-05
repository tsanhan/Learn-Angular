import { Recipe } from './../../recipe.model';
import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent  {
  @Input() rec:Recipe;
  @Input() index:number;
  constructor() { }


}
