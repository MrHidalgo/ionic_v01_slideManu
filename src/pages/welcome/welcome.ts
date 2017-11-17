import {Component} from '@angular/core';
import { NavController  } from 'ionic-angular';

import { SignIn } from "../signin/signin";
import { SignUp } from "../signup/signup";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {
  
  pages: Array<{ title: string, component: any }>;
  
  constructor(public navCtrl: NavController) {
    this.pages = [
      {
        title: "Sign In",
        component: SignIn
      },
      {
        title: "Create new account",
        component: SignUp
      }
    ];
  }
  
  openPage(page) {
    this.navCtrl.push(page.component)
  }
}
