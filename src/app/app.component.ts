import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="border: 10px solid green; padding: 10px;">
      <hello></hello>
      <br />
      <button (click)="onClick()">Trigger change detection</button>
    </div>
  `
})
export class AppComponent {
  title = 'changedetection';
  onClick() {}
}
