import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <div style="border: 10px solid #51d7e0">
      {{ todo.title }} {{ runChangeDetection }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo;

  get runChangeDetection() {
    console.log('TodosComponent - Checking the view');
    return '';
  }
}
