import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from "aurelia-pal";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'Contacts';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('no-selection'), title: 'Select' },
      { route: 'contacts/:id', name: 'contacts', moduleId: PLATFORM.moduleName('contact-detail') }
    ]);
  }
}
