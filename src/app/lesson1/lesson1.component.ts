import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {

  @Output() asd: EventEmitter<number> = new EventEmitter<number>();

  @Input() money = 0;

  constructor() { }

  ngOnInit() {
  }


}
