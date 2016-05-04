import {Page, NavController} from 'ionic-angular';
import { Router } from 'angular2/router';
import {HomePage} from '../home/home';

@Page({
    templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
    public username;
 
    constructor(private router: Router, 
                private nav: NavController) {
    }

    login() {
        //  this.router.navigate(['/home']);
        this.nav.push(HomePage);
    }
}
