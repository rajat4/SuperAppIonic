import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold2v1',
  templateUrl: './gold2v1.page.html',
  styleUrls: ['./gold2v1.page.scss'],
})
export class Gold2v1Page implements OnInit {
  text: string;
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
}

  ngOnInit() {
  }
  item="assets/Images/main.png";
  items=({
    // text: "Rajat";
  })
  // var arr[]: any;
  //  arr[] = ["1", "2", "3"];
  // console.log(arr);
  // var a = 10;


 
  
// async greet() {
//       return "Hello, " + this.greeting;
//   }




}
var a=10;
// let item={a, b};
let greeting: string ="Good Morning";

// let greeter = new Greeter("world");
console.log(greet())

function greet(): any {
  return "Hello, " + this.greeting;
  throw new Error('Function not implemented.');
}
