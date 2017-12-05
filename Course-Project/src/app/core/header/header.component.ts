import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from './../../shared/data-storage.service';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import {Response} from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  
    constructor(private dataStoreServ:DataStorageService,
                private authService: AuthService) {}
    onSave(){
        this.dataStoreServ.storeRecipies().subscribe((response)=>{
            console.log(response);
        })
    }

    onFetch(){
     
       return this.dataStoreServ.fetchRecipies();
       
    }
    onSignout(){
        this.authService.signoutUser();
    }
}
