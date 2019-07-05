import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <counter></counter>
    <button (click)="onClick()">Trigger change detection</button>
  `
})
export class AppComponent {
  config = {
    position: 'top'
  };

  onClick() {
    this.config = {
      position: 'bottom'
    };
  }
}
