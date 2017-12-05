import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params ,Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipieService:RecipeService,private router: Router) { }
  id:number;
  editMode: boolean = false;
  recipeForm:FormGroup;

  onSubmit(){
    
    console.log(this.recipeForm);
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['ImgPath'],
    //   this.recipeForm.value['ingredients']);

    if(this.editMode){
      //this.recipieService.updateRecipe(this.id,newRecipe);
      this.recipieService.updateRecipe(this.id, this.recipeForm.value);
    }
    else{
      //this.recipieService.addRecipe(newRecipe);
      this.recipieService.addRecipe(this.recipeForm.value);
    } 
    this.router.navigate(['../'], {relativeTo: this.route});
    
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      //console.log('editMode: ' + this.editMode);
    })
  }

  private initForm(){
    let recipieName:string = '';
    let recipieImgPath: string ='';
    let description: string ='';
    let recipieIngredients:FormArray = new FormArray([]);

    if(this.editMode){
      const recipie = this.recipieService.getRecipe(this.id);      
      recipieName = recipie.name;
      recipieImgPath = recipie.imagePath;
      description = recipie.description;
      if(recipie['ingredients']) {
          for (let ing of recipie.ingredients){
            recipieIngredients.push(
              new FormGroup({
                'name': new FormControl(ing.name,Validators.required),
                'amount': new FormControl(ing.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
              })
            )
          }
        }
      }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipieName,Validators.required),
      'imagePath': new FormControl(recipieImgPath,Validators.required),
      'description': new FormControl(description,Validators.required),
      'ingredients': recipieIngredients
    });
  }
  addNewIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }
}
