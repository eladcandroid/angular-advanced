import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CounterComponent } from './counter/counter.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TooltipComponent,
    CounterComponent,
    TodosComponent,
    TodoComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
