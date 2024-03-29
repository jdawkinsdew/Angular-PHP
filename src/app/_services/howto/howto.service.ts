import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class HowtoService {

    constructor(
        private http: HttpClient,
        @Inject(APP_BASE_HREF) private baseHref: string
    ) {
    }

    getBanners(): Promise<any> {
        return new Promise(((resolve, reject) => {
            this.http.get(this.baseHref + '/assets/data/banners.json')
                .subscribe(data => {
                        resolve(data);
                    },
                    error1 => {
                        reject();
                    }
                );
        }));
    }
}
