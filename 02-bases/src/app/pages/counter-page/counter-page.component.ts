import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {

  counter = 15;
  counterSignal = signal(10)

  increaseBy(value: number){
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current + value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
