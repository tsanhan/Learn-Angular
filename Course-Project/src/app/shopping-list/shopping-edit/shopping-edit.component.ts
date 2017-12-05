import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewChecked, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  editMode:boolean = false;
  editedItemId: number;
  editedItem: Ingredient;

  @Input() id: number;
  @ViewChild ('f') form:NgForm;
  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amountInput') amountInput: ElementRef;



  Add(form:NgForm) {
    const value = form.value;

    const ingName = value.name;
    const ingAmount = value.amount;
    const ing = new Ingredient(ingName, ingAmount);

    if(!this.editMode)
      this.shoppingListService.addToIngredients(ing);
    else
      this.shoppingListService.updateIng(this.editedItemId,ing);

    this.editMode = false;
    this.form.reset();

    // const ingName = this.nameInput.nativeElement.value;
    // const ingAmount = this.amountInput.nativeElement.value;
    // const ing = new Ingredient(ingName, ingAmount);
    // this.shoppingListService.addToIngredients(ing);
    console.log(form);
  }
  Delete() {
    this.shoppingListService.removeIngredient(this.editedItemId);
    this.Clear();
  }
  Clear() {
    this.form.reset();
    this.editMode = false;
    // this.nameInput.nativeElement.value = '';
    // this.amountInput.nativeElement.value = '';
  }
  constructor(private shoppingListService: ShoppingListService) {
    
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.statredEditing.subscribe((id:number) =>{
      // set value using the form
      this.editMode = true;
      this.editedItemId = id;
      
      this.editedItem = this.shoppingListService.getIngredient(id);

      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
