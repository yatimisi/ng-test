import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Candidate } from '../models/candidate.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
  styleUrls: ['./httptest.component.css']
})
export class HttptestComponent implements OnInit {

  candidates: Candidate[];
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getApi<Candidate[]>('candidates')
    .subscribe(
      data => {
        console.log(data);
        this.candidates = data;
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('finish');
      }
    );
  }

}
