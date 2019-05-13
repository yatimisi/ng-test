import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit {
  val: number;
  constructor(
    private serviceService: ServiceService
  ) {

  }

  ngOnInit() {
    console.log(this.serviceService.calBMI(1, 2));
  }

}
