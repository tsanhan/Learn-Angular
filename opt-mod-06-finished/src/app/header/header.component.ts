import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, pipe } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromApp from "../store/app.reducer";
import * as AuthActions from "../auth/store/auth.actions";
import * as RecipesActions from '../recipes/store/recipe.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(

    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.userSub = this.store.select('auth')
      .pipe(
        map(authState => authState.user)
      )
      .subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });
  }

  onSaveData() {
    this.store.dispatch( RecipesActions.storeRecipes());
    //this.dataStorageService.storeRecipes();
  }

  onFetchData() {

    this.store.dispatch( RecipesActions.fetchRecipes())

    //this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.store.dispatch( AuthActions.logout())
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
