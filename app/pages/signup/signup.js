import {Page, NavController} from 'ionic/ionic';
import {TabsPage} from '../tabs/tabs';


@Page({
  templateUrl: 'build/pages/signup/signup.html'
})
export class SignupPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  signup() {
    this.nav.push(TabsPage);
  }
}
