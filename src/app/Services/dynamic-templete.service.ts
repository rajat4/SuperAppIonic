import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DynamicTempleteService {
  subtitles: any;
  data: any;

  constructor(private httpclient: HttpClient) { }

  GetDynamicWealthData(): Observable<any> {
  
    return this.httpclient.get('assets/templateData/wealthData.json');
  }

  GetDynamicHealthData(): Observable<any> {
  
    return this.httpclient.get('assets/templateData/templateData.json');
  }

  GetDynamicAllWellnessData(): Observable<any> {
 
    return this.httpclient.get('assets/templateData/templateData.json');
  }

  GetMFLandingKYCdoneNoTransaction(): Observable<any> {
    return this.httpclient.get('assets/templateData/MFLandingKYCdoneNoTransaction.json');
  }

  GetMFProductPageDetails(): Observable<any> {
    return this.httpclient.get('assets/templateData/MfProductDetails.json');
  }

  GetBasicMOdeDetails(): Observable<any> {
    return this.httpclient.get('assets/templateData/BasicMode.json');
  }
  
  GetLumpsumTransactionDetails(): Observable<any> {
    return this.httpclient.get('assets/templateData/LumpsumTransaction.json');
  }

  GetLoginTemp(languageType): Observable<any> {
    if(languageType == "en"){
      return this.httpclient.get('assets/templateData/LoginTempEN.json');
    } else{
      return this.httpclient.get('assets/templateData/LoginTempHN.json');
    }
  }
  
  GetMarketingScreen(languageType): Observable<any> {
    if(languageType == "en"){
      return this.httpclient.get('assets/templateData/MarketingScreenEN.json');
    } else{
      return this.httpclient.get('assets/templateData/MarketingScreenHN.json');
    }
  }

  GetSignUpLabels(languageType): Observable<any> {
    if(languageType == "en"){
      return this.httpclient.get('assets/templateData/SignUpPageLabelEN.json');
    } else{
      return this.httpclient.get('assets/templateData/SignUpPageLabelHN.json');
    }
  }

  GetBasicModeLabels(languageType): Observable<any> {
    if(languageType == "en"){
      return this.httpclient.get('assets/templateData/BasicModeLabelsEN.json');
    } else{
      return this.httpclient.get('assets/templateData/BasicModeLabelsHN.json');
    }
  }

  GetBasicModeWealthLabels(languageType): Observable<any> {
    if(languageType == "en"){
      return this.httpclient.get('assets/templateData/BasicModeWealthEN.json');
    } else{
      return this.httpclient.get('assets/templateData/BasicModeWealthEN.json');
    }
  }

  GetBasicModeHealthLabels(languageType): Observable<any> {
    if(languageType == "en"){
      return this.httpclient.get('assets/templateData/BasicModeHealthEN.json');
    } else{
      return this.httpclient.get('assets/templateData/BasicModeHealthEN.json');
    }
  }

  GetBasicModeEducationLabels(languageType): Observable<any> {
    if(languageType == "en"){
      return this.httpclient.get('assets/templateData/BasicModeEducationEN.json');
    } else{
      return this.httpclient.get('assets/templateData/BasicModeEducationEN.json');
    }
  }

  GetBasicModeLifestyleLabels(languageType): Observable<any> {
    if(languageType == "en"){
      return this.httpclient.get('assets/templateData/BasicModeLifestyleEN.json');
    } else{
      return this.httpclient.get('assets/templateData/BasicModeLifestyleEN.json');
    }
  }

  GetBasicModeProdListBtTabLabels(languageType): Observable<any> {
    if(languageType == "en"){
      return this.httpclient.get('assets/templateData/BasicModeProdListBtTabLabelsEN.json');
    } else{
      return this.httpclient.get('assets/templateData/BasicModeProdListBtTabLabelsEN.json');
    }
  }
  
  GetMfProductDetailsLabel(languageType): Observable<any> {
    if(languageType == "en"){
      return this.httpclient.get('assets/templateData/MfProductDetailsLabelEN.json');
    } else{
      return this.httpclient.get('assets/templateData/MfProductDetailsLabelEN.json');
    }
  }
}