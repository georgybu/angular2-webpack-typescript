import { Component } from 'angular2/core';
import { RateComponent } from './rateComponent';

@Component({
    selector: 'App',
    template: `<rate-component></rate-component>`,
    directives: [RateComponent],
})

export class App {
    constructor() {
    }
}
