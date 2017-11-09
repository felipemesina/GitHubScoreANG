import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GitRetrieverService {
  private username;
  constructor(private _http: Http) { }

  getUserInfo = function(username, callback){
    this._http.get(`https://api.github.com/users/${username}`)
    .subscribe(
      (response) => { callback(response.json()); },
      ( err ) => { console.log(err); }
    );
  }

}
