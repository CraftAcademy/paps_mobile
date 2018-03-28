import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  article: any[];
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private http: Http) {

    this.http.get(this.apiUrl)
                .map((response: Response) => response.json())
                .subscribe(data => {
                console.log(data);
                this.article = data.data;
                });
              
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  } 
  public apiUrl: string = 'https://papnews.herokuapp.com/api/v1/articles';
  
}
  