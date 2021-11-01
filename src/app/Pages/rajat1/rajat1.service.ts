import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Rajat1Service {
  subtitles: any;
  data: any;

  constructor(private httpclient: HttpClient) { }

  GetDynamicGoldData(): Observable<any> {
    return this.httpclient.get('assets/templateData/rajat1.json');
  }

}