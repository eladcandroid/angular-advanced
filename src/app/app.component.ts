import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="add()">Add</button>
    <app-todos [todos]="todos"></app-todos>
  `
})
export class AppComponent {
  todos = [{ title: 'One' }, { title: 'Two' }];

  add() {
    this.todos = [...this.todos, { title: 'Three' }];
  }
}
