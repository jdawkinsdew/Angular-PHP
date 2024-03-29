import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URL_SERVICIOS} from '../../../config/url.servicios';
import {first, map} from 'rxjs/operators';
import {pipe} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuysellService {
  public rowData: any = [];
  public business_id: any;
  public business_remain: any;
  public business_name: any;
  public modal_content: any;
  public action: any;
  public commission: any;
  public fundTypes = [];
  constructor(private http: HttpClient) { }

  getBuyHistory(userId) {
    const action = 'get';
    const url = `${URL_SERVICIOS}/buysell.php`;
    return this.http.post(url, {userId, action});
  }

  getSellHistory(userId) {
    const action = 'get_all';
    const url = `${URL_SERVICIOS}/buysell.php`;
    return this.http.post(url, {userId, action});
  }

  getPortfolio(userid) {
    const action = 'get_portfolio';
    const url = `${URL_SERVICIOS}/buysell.php`;
    return this.http.post(url, {userid, action});
  }

  setHistory(userId, businessId, balance, amount, fund, rate, frequency, merchant_id, merchant_key) {
    const url = `${URL_SERVICIOS}/buysell.php`;
    const action = 'set';
    return this.http.post(url, {userId, businessId, balance, amount, fund, rate, frequency, merchant_id, merchant_key, action});
  }

  buy(userId, businessId, balance, amount, fund, rate, frequency) {
    const action = 'buy';
    const url = `${URL_SERVICIOS}/buysell.php`;
    return this.http.post<any>(url, {userId, businessId, balance, amount, fund, rate, frequency, action})
        .pipe(first())
        .subscribe(data => {});
  }

  sell(business_id, amount, userid) {
    console.log('businessId = ', business_id);
    const action = 'sell';
    const url = `${URL_SERVICIOS}/buysell.php`;
    return this.http.post(url, {business_id, amount, userid, action});
  }
}
