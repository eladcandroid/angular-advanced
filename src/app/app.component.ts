import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="border: 10px solid green; padding: 10px;">
      <a routerLink="/">Home</a> | <a routerLink="/feature">Feature</a>
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  onClick() {}
}
