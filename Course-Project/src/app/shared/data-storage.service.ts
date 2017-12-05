import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class DataStorageService{
    /**
     *
     */
    constructor(private http: Http ,
                private resService: RecipeService,
                private authService: AuthService) {}

    storeRecipies():Observable<Response>{
        const tk =  this.authService.getToken();
        return this.http.put(
            'https://ng-recipe-book-31702.firebaseio.com/recipies.json?auth='+ tk,
            this.resService.getRecipes()
        );
    }

    fetchRecipies(){
        
        const tk =  this.authService.getToken();
       
         this.http.get('https://ng-recipe-book-31702.firebaseio.com/recipies.json?auth='+ tk)
        .map((res:Response) => {
            const data : Recipe[] = res.json();      
            for(let res of data){
                //we might not have ingredients so I dont want the returned object to miss it
                if(!res['ingredients']){
                    res['ingredients'] =[];
                }
            }
            return data;
        })
        .subscribe((res: Recipe[]) => {
            this.resService.setRecipes(res);
        });
    }
    
}