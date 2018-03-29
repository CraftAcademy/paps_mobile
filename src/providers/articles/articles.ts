import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesProvider {
  private apiUrl: string = 'https://papnews.herokuapp.com/api';

  constructor(private http: Http) {}

  all() {
    return this.http.get(this.apiUrl+'/v1/articles' )
                    .map((response: Response) => response.json())
  }

  show(id: number) { 
  }
}
