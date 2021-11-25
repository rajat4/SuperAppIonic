import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'app-gc2v2',
  templateUrl: './gc2v2.page.html',
  styleUrls: ['./gc2v2.page.scss'],
})
export class Gc2v2Page implements OnInit {

  formReceivedSummons: any;

  constructor() { }

  ngOnInit() {
  }
  selectAllCheckbox() {
    this.formReceivedSummons.controls.map(value => value.setValue(true));
  }
  selectAll() {
    
    var check = document.getElementsByName("group4"),
        radios = document.forms;

   if (check[0]) {
    
      for( let i = 0; i < radios.length; i++ ) {

        if( radios[i].type == "radio" ) {
 
          if (radios[i].value == 1 ) {
        
            radios[i].checked = true;
          }    
        }
      }
      
  
    } else {
      
      for( let i = 0; i < radios.length; i++ ) {
        if( radios[i].type == "radio" ) {
          if (radios[i].value == 0 ) {
            radios[i].checked = true;
          }       
        }
      }
    };
    return null;
  }
}
