import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GC1v1Service {
  subtitles: any;
  data: any;

  constructor(private httpclient: HttpClient) { }

  DataGC1v1(): Observable<any> {
   
    return this.httpclient.get('assets/templateData/GC1v1.json');

  }

}