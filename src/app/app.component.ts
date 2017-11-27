import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { TasksPage } from "../pages/tasks/tasks";
import { HoursPage } from "../pages/hours/hours";
import { ProfilePage } from "../pages/profile/profile";
import { SettingPage } from "../pages/setting/setting";
import { ContactsPage } from "../pages/contacts/contacts";

import { SignIn } from "../pages/signin/signin";
import { SignUp } from "../pages/signup/signup";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage ;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public loadingCtrl: LoadingController
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: ProfilePage },
      { title: 'Tasks', component: TasksPage },
      { title: 'Hours', component: HoursPage },
      { title: 'Setting', component: SettingPage },
      { title: 'Contacts', component: ContactsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  signOut() {
    let loader = this.loadingCtrl.create({
      content: "Thank you for using the application",
      duration: 1500
    }).present();
  
    setTimeout(() => {
      this.nav.setRoot(WelcomePage);
    }, 1500);
  }
}
