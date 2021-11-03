import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold15v1',
  templateUrl: './gold15v1.page.html',
  styleUrls: ['./gold15v1.page.scss'],
})
export class Gold15v1Page implements OnInit {

  

  ngOnInit() {
  }
  
  strings:Array<string>;
  selected:string;
  
  constructor(){
      this.strings = new Array<string>();
      this.strings.push('a');
      this.strings.push('b');
  }
}
