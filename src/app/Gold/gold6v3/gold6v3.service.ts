import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Gold6v3Service {
  subtitles: any;
  data: any;

  constructor(private httpclient: HttpClient) { }

  GetDynamicGoldData6v3(): Observable<any> {
    // return this.httpclient.get('src/app/Gold/gold6v3/gold6v3.json');
    // return this.httpclient.get('/app/Gold/gold6v3/gold6v3.json');
    return this.httpclient.get('assets/templateData/gold6v3.json');
    // return this.httpclient.get('gold6v3.json');

    
  }

}