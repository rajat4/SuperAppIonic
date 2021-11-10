import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GC1v2Service {
  subtitles: any;
  data: any;

  constructor(private httpclient: HttpClient) { }

  DataGC1v2(): Observable<any> {
   
    return this.httpclient.get('assets/templateData/GC1v2.json');

  }

}