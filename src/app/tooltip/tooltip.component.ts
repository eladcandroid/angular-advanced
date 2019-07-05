import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tooltip',
  template: `
    <div style="border: 10px solid red">
      <h1>{{ config.position }}</h1>
      {{ runChangeDetection }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  @Input() config;

  get runChangeDetection() {
    console.log('Checking the view');
    return 'Checking the view';
  }
}
