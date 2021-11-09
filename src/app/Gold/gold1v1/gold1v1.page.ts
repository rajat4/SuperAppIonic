import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold1v1',
  templateUrl: './gold1v1.page.html',
  styleUrls: ['./gold1v1.page.scss'],
})
export class Gold1v1Page implements OnInit {

  defaultImage = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713';
  image = 'https://images.unsplash.com/photo-1566837945700-30057527ade0';

  constructor() { }

  ngOnInit() {
  }

}
