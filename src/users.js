import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {BindingEngine} from 'aurelia-framework';
import {globals} from 'globals'
@inject(HttpClient, BindingEngine)
export class Users {
  filtro = "";

  constructor(http, bindingEngine){
    this.cargando = globals.cargando;
    this.http = http;
    this.posts = [];
    this.subreddit_url = "http://iae.dyndns.org/iae2/?r=api/alumnos";
    //this.subreddit_url = "http://localhost/iae/?r=api/alumnos";
    bindingEngine.propertyObserver(this, 'filtro')
      .subscribe( () => this.getPosts());
  }


  getPosts() {
    if (this.filtro.length > 0) {
      globals.cargando = true;
      this.http.jsonp(`${this.subreddit_url}&filtro=${this.filtro}`, "callback")
        .then(r => {
          globals.cargando = false;
          return (this.posts = [] = r.response);
        });
    }else{
      this.posts.splice(0);
    }
    return [];
  }


}
