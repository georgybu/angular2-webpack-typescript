import { Component, Input } from 'angular2/core';
import { NgFor, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { DataProvider } from '../services/dataProvider';

@Component({
    selector: 'rate-component',
    templateUrl: './components/rateComponent.html',
    providers: [DataProvider],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class RateComponent {
    data:any = [{base: '', date: '', rates: []}];
    show:any = [];
    showCache:Object = {};

    constructor(public dataProvider:DataProvider) {
        this.refreshRates();
    }

    refreshRates() {
        this.dataProvider.getRatesByDays().subscribe(res => {
            if (res[0].rates) {
                let ratesKeys = Object.keys(res[0].rates);
                this.show = ratesKeys.map((key) => {
                    this.showCache[key] = true;
                    return {'key': key, 'enable': true}
                });
            }
            return this.data = res;

        });
    }

    getItemsTitles(rates = this.data[0].rates) {
        return Object.keys(rates);
    }

    toggleVisibility(event, item) {
        this.showCache[item.key] = event.currentTarget.checked;
    }

    getVisibility(key) {
        return !!this.showCache[key];
    }
}