import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank1',
  templateUrl: './bank1.page.html',
  styleUrls: ['./bank1.page.scss'],
})
export class Bank1Page implements OnInit {
  IFSC_code: string = "ICICI000012";
  constructor() { }

  ngOnInit() {
  }

}
