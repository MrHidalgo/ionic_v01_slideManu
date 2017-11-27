import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TasksPage } from "../tasks/tasks";

import { Validators, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})

export class SignIn {
  
  rootPage: any;
  signInForm: FormGroup;
  
  
  constructor(
    public NavCtrl: NavController
  ) {
    
    this.rootPage = TasksPage;
    
    this.signInForm = new FormGroup({
        userEmail : new FormControl("", [
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}")
            ]
          )
        ]),
        userPassword : new FormControl("", [
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        ])
    });
  }
  
  public login() {
    console.log(this.signInForm.value);
    console.log(window.localStorage);
    this.NavCtrl.setRoot(this.rootPage);
  }
  
  // public goToHomePage(){
  //   this.NavCtrl.setRoot(this.rootPage);
  // }
}
