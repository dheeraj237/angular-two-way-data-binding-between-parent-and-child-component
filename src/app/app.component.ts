import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="background-color: red; padding: 10px;">
    <div>{{counter}}</div>
    <button (click)="increment()">increment from parent</button>
    <app-child [(counter)]="counter"></app-child>
    <app-child [counter]="counter" (counterChange)="counter=$event"></app-child>
    <app-child [counter]="counter" (counterChange)="onCounterChange($event)"></app-child>
  </div>
  `
})
export class AppComponent {

  counter = 0;

  increment() {
    this.counter++;
  }

  onCounterChange(counter: number) {
    this.counter = counter;
  }
}

@Component({
  selector: 'app-child',
  template: `
  <div style="background-color: green; padding: 10px; margin: 10px;">
    <div>{{counter}}</div>
    <button (click)="increment()">increment from child</button>
  </div>
  `,
})
export class ChildComponent {

  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }

  increment() {
    this.counterChange.emit(++this.counter);
  }

}