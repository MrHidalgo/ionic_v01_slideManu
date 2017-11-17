import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignIn } from '../pages/signin/signin';
import { SignUp } from "../pages/signup/signup";
import { TasksPage } from "../pages/tasks/tasks";
import { HoursPage } from "../pages/hours/hours";
import { ProfilePage } from "../pages/profile/profile";
import { SettingPage } from "../pages/setting/setting";
import { ContactsPage } from "../pages/contacts/contacts";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    WelcomePage,
    SignIn,
    SignUp,
    TasksPage,
    HoursPage,
    ProfilePage,
    SettingPage,
    ContactsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    WelcomePage,
    SignIn,
    SignUp,
    TasksPage,
    HoursPage,
    ProfilePage,
    SettingPage,
    ContactsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
