import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `
    <div style="border: 10px solid #82faad">
      <div *ngFor="let todo of todos">
        {{ todo.title }} {{ runChangeDetection }}
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos;

  get runChangeDetection() {
    console.log('TodosComponent - Checking the view');
    return '';
  }
}
