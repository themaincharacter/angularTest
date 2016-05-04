import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HomePage} from '../../pages/home/home';
import {LoginPage} from '../../pages/login/login';

@Component({
  templateUrl: 'build/components/app/app.component.html',
  directives: [ROUTER_DIRECTIVES, LoginPage, HomePage]
})
@RouteConfig([
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }
])
export class AppComponent {}
