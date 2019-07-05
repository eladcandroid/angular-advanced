import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div style="border: 10px solid #82faad">
      <button (click)="add()">Add</button><br />
      COUNT: {{ count }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  count = 0;

  constructor() {
    setTimeout(() => (this.count = 5), 0);

    setInterval(() => (this.count = 5), 100);

    Promise.resolve().then(() => (this.count = 5));

    // AND ALSO WHEN WE CALL API
    // this.http.get('https://count.com').subscribe(res => {
    //   this.count = res;
    // });
  }

  add() {
    this.count++;
  }
}
