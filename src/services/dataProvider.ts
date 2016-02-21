import { Http, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DataProvider {
    private baseUrl:string = 'http://api.fixer.io/';

    constructor(public http:Http) {
    }

    getRatesByDays(days:number = 30, currency:string = 'USD') {
        var requests = DataProvider.getDateRange(days).map((day) =>
            this.http.get(this.baseUrl + day).map((res:Response) => {
                return res.json();
            })
        );
        return Observable.forkJoin(...requests);
    }

    static getFormattedDate(d:Date) {
        let mm = d.getMonth() + 1;
        let dd = d.getDate();
        return [
            d.getFullYear(),
            (mm < 10) ? '0' + mm : mm,
            (dd < 10) ? '0' + dd : dd
        ].join('-');
    }

    static getDateRange(daysCount:number = 30) {
        let range:Array<string> = [];
        for (let i = 0; i <= daysCount; i++) {
            let d:Date = new Date();
            d.setDate((new Date()).getDate() - i);
            range.push(DataProvider.getFormattedDate(d));
        }
        return range;
    }

}