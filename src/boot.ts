import 'expose?Zone!zone.js';
import 'reflect-metadata';

import {HTTP_PROVIDERS} from 'angular2/http';
import { bootstrap }    from 'angular2/platform/browser';
import { App }          from 'components/app'

bootstrap(App, [HTTP_PROVIDERS]);
