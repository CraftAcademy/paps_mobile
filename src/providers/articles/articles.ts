import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesProvider {
  private apiUrl: string = 'https://papnews.herokuapp.com/api/vi/';

  constructor(public http: Http) {}

  all() {
    return this.http.get('$(this.apiUrl)/v1/articles' )
                    .map((response: Response) => response.json())
  }

  show(id: number) {

  }

  

}
