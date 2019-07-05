import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div style="border: 10px solid red">
      <h1>Hello! {{ runChangeDetection }}</h1>
    </div>
  `
})
export class HelloComponent {
  get runChangeDetection() {
    console.log('Checking the view');
    return 'Always check me!';
  }
}
