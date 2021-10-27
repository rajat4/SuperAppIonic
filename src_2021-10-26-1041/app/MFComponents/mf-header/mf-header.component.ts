import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mf-header',
  templateUrl: './mf-header.component.html',
  styleUrls: ['./mf-header.component.scss'],
})
export class MfHeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {}

  navigateTo(navPage){
    if(navPage == "Search"){
      this._router.navigate(['../../Search']);
    }
  }

}
