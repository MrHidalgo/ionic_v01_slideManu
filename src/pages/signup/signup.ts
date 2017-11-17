import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TasksPage } from "../tasks/tasks";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignUp {
  rootPage: any;
  
  constructor(public NavCtrl: NavController) {
    this.rootPage = TasksPage;
  }
  
  public goToHomePage(){
    this.NavCtrl.setRoot(this.rootPage);
  }
}
