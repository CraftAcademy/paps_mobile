import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticlesProvider } from '../../providers/articles/articles';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articles: any[];
  constructor(public navCtrl: NavController, 
              private articlesProvider: ArticlesProvider) {

    this.articlesProvider.all()
        .subscribe(({ data }) => {
        this.articles = data;
    });
  }
}
