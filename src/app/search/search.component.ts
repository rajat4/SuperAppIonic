import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  isClick: boolean = false;

  constructor() { }

  ngOnInit() { }

  // btnClick(btnEq) {
  //   // var elem = document.getElementsByClassName("button-selected");      
  //   // if element having class `"button-selected"` defined, do stuff
  //   // if (elem) {
  //   //   elem.className = "ion-button";
  //   // }
  //   // var btn = document.getElementById("btnEq");
  //   // btn.className = "button-selected";

  //   var elem = document.getElementsByClassName("button-selected")[0];
  //   // if element having class `"button-selected"` defined, do stuff
  //   if (elem) {
  //     elem.className = "";
  //   }
  //   var btn = document.getElementById("btnEq");
  //   btn.className = "button-selected";
  //   // button.className = "button-selected";

  // }

  isClicked() {
    return this.isClick;
  }

  onClick() {
    this.isClick = !this.isClick;
  }
}
