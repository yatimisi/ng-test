import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit {
  scores = [10, 20, 30, 40, 50, 60, 70, 80];
  a: Account = {
    account: 'abc',
    pwd: '132'
  };
  @Input() test = '55688';
  constructor() { }

  ngOnInit() {
  }

}

export class Account {
  account: string;
  pwd: string;
  email?: string;
}
