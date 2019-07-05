import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <tooltip [config]="config"></tooltip>
    <button (click)="onClick()">Trigger change detection</button>
  `
})
export class AppComponent {
  config = {
    position: 'top'
  };

  onClick() {
    this.config.position = 'bottom';
  }
}
