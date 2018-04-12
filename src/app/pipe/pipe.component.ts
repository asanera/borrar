import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  a: number = 0.259;
  b: number = 1.3495;
  fecha: Date = new Date();
  e: number = 2.718281828459045;
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  value: string;
  str: string = 'abcdefghij';
  collection: string[] = ['a', 'b', 'c', 'd'];
  time: number;
  timerBase = Observable.interval(1000).startWith(0).subscribe(num=> {
    this.time = num;
  });
  change(value: string) { this.value = value; }
  constructor() { }

  ngOnInit() {
    
  }

}
