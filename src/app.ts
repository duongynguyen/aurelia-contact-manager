import { RouterConfiguration, Router } from 'aurelia-router';
import { inject, PLATFORM } from "aurelia-framework";
import { WebAPI } from "./web-api";

@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) { }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'Contacts';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('no-selection'), title: 'Select' },
      { route: 'contacts/:id', name: 'contacts', moduleId: PLATFORM.moduleName('contact-detail') }
    ]);
  }
}
