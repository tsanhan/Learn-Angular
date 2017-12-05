import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;
    
    constructor(private router: Router) {}
    
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
            error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
            //response => console.log(response)
            response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getToken()
                    .then(
                    (token: string) => {
                        this.token = token;
                    }
                    )
            }
            )
            .catch(
            error => console.log(error)
            );
    }

    signoutUser(){
        firebase.auth().signOut();
        this.token = null
    }
    getToken() {
        //an async action.
        //if token expiered, tring to reach and get a new one
        firebase.auth().currentUser.getToken()
            .then(
            (token: string) => {
                this.token = token;
            });
        return this.token;
    }

    isAouthenticated() : boolean{
        return this.token != null
    }
}