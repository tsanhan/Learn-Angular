import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    //we need to subscribe to the params observible bacause
    //if the params are changed in the url we will not know that
    //if we just came from the same component and asking the same
    // component on route change
    // (angular does not rerender component if we just been there)
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

    ngOnDestroy(){
      //this is not a must, angular will clean the subcriptions by himself
      //but if I have own subscriptions I need to make sure I', unsubscribing them
      //this is a goog practice anyway
      this.paramsSubscription.unsubscribe();
    }
}
