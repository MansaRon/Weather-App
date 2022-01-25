import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Services {

  constructor(private http: HttpClient) {}

  public getWeatherEndpoint(): Observable<any> {
    // eslint-disable-next-line max-len
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=-26.0208631&lon=28.1995223&units=metric&appid=0a5aaa29162608d5cc5206c1217f1ac0');
  }

  public test(): Observable<any> {
    return this.http.get('https://facebook.com');
  }

}
