import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RoboAdvosory1Service{
    constructor(private httpClient: HttpClient){}
    ngOnInit(){}
    GetDynamicRobo1Data(): Observable<any> {
        return this.httpClient.get('app/Pages/robo-advisory1/form.json');
      }
}