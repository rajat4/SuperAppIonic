import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-pan',
  templateUrl: './confirm-pan.page.html',
  styleUrls: ['./confirm-pan.page.scss'],
})
export class ConfirmPanPage implements OnInit {

  pan: string;
  rbs: any;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    console.log(localStorage.getItem("PAN_Number"));
    // document.getElementById("abc").innerHTML = localStorage.getItem("PAN_Number");
  }
//   if(document.getElementById('Indian').checked == true) {   
//     document.write("Indian radio button is selected");   
// } else {  
//     document.write("Indian radio button is not selected");   
// } 
  pushPage1(){
    // this.navCtrl.navigateForward(['add-bank-account']);
    
    this.navCtrl.navigateForward(['LumpsumTransaction']);
    // this._router.navigate(['./LumpsumTransaction']);
  }
}
const btn = document.querySelector('#btn');
// document.getElementById("abc").innerHTML = localStorage.getItem("PAN_Number");
// handle button click
// btn.onclick = function () {
//     const rbs = document.querySelectorAll('input[name="choice"]');
//     let selectedValue;
//     for (const rb of rbs) {
//         if (rb.checked) {
//             selectedValue = rb.value;
//             break;
//         }
//     }
//     alert(selectedValue);
// };
