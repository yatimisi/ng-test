import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  name = 'Lux';
  url = 'https://www.google.com';
  @Input() money = 0;

  constructor() { }

  ngOnInit() {
  }

  sayHello() {
    alert(this.name);
  }

}
