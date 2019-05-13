import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  calBMI(height: number, weight: number): number {
    let bmi = 0.0;
    bmi = weight / Math.pow((height / 100), 2);
    return bmi;
  }
}
