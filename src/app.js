import {inject} from 'aurelia-framework';
import toastr from 'toastr';
@inject(toastr)
export class App {
  toaster = null;
  constructor(toastr){
    console.log(toastr);
    this.toaster = toastr;
    this.toaster.options.closeButton = true;
    this.toaster.success("hola");
    //window.app = this;
  }
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      {route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome'},
      {route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users'},
      {
        route: 'child-router',
        name: 'child-router',
        moduleId: 'child-router',
        nav: true,
        title: 'Child Router'
      }
    ]);

    this.router = router;
  }
  test(){
    console.log(this.toaster);
    this.toaster.success("hola");

  }
  //get cargando() {
  //  console.debug("Getting cargando");
  //  return globals.cargando;
  //}
}

