import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

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

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.count = 5;
      this.cdr.detectChanges();
    }, 1000);

    // AND ALSO WHEN WE CALL API
    // this.http.get('https://count.com').subscribe(res => {
    //   this.count = res;
    // });
  }

  add() {
    this.count++;
  }
}
