import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';

import * as fromRoot from './root/root.reducer';

@Component({
	selector: 'app-root',
	template: `
	<nav>
		<a routerLink='/planets/'>PLANETS</a>
		<a routerLink='/starships/'>STARSHIPS</a>
	</nav>
		<router-outlet></router-outlet>
	`,
})
export class AppComponent { }
