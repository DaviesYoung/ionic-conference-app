import {IonicApp, Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  constructor(nav: NavController, app: IonicApp) {
    this.nav = nav;
    this.app = app;
  }

  login() {
    this.nav.push(TabsPage);
  }

  signup() {
    this.nav.push(SignupPage);
  }
}
