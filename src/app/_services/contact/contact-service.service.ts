import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URL_SERVICIOS} from '../../../config/url.servicios';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  register(formData) {
    const url = `${URL_SERVICIOS}/business_reg.php`;
    return this.http.post(url, formData);
  }

  getBusinessList(userid: string) {
    const action = 'get';

    return this.http.post<any>(`${URL_SERVICIOS}/business.php`, { userid,  action })
        .pipe(map(business => {
            return business;
        }));
  }

  getGeometry(address) {

    return this.http.post<any>(`${URL_SERVICIOS}/contactus.php`, { address})
        .pipe(map(result => {
            return result;
        }));
  }
}
