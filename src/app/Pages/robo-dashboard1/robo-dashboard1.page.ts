import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robo-dashboard1',
  templateUrl: './robo-dashboard1.page.html',
  styleUrls: ['./robo-dashboard1.page.scss'],
})
export class RoboDashboard1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  names: any[] = [
  {
    "name": "Your Income",
  },
  {
    "name": "Your Expenses",
  },
  {
    "name": "Your Assets",
  },
  {
    "name": "Your Liabilities",
  }
  ]
}
