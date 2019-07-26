import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  language: string;
  today = new Date();
  bigNum = 1000000;
  money = 250000;

  constructor(@Inject(LOCALE_ID) private local: string) { }

  ngOnInit() {
    this.language = this.local;
  }

}
