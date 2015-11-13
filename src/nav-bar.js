import {inject} from 'aurelia-framework';
import {globals} from 'globals';
import {BindingEngine} from 'aurelia-framework';

@inject(BindingEngine)
export class NavBar {
  cargando = false;

  constructor(bindingEngine) {
    bindingEngine.propertyObserver(globals, 'cargando')
      .subscribe( (cargando) => this.cargando = cargando);
  }

}