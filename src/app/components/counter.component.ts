import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
         <label>Season Count</label>
         <button  (click)="increment()" >
             <i class="fa fa-plus"></i>
         </button>
         <h1>{{count}}</h1>
         <button  [disabled]="count==1" (click)="decrement()">
             <i class="fa fa-minus"></i>
         </button>
    </div>
  `,
  styles: [
    `
      @import 'mixins';
      .counter {
        width: 230px;
        position: relative;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 30px 8px 8px 8px;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        button{
          @include button(small);
          &:disabled{
           background-color:gray;
          }
        }
        h1 {
          font-size:24px;
        }
        label{
          color: gray;
          position : absolute;
          left:10px;
          top:10px;
        }
      }
    `,
  ],
})
export class CounterComponent {
  @Input() count:number = 1;
  @Output() inputChange = new EventEmitter<number>();
  increment(){
    this.count++;
    this.inputChange.emit(this.count)
  }
  decrement(){
    this.count--;
    this.inputChange.emit(this.count)
  }

}
