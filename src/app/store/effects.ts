import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { EMPTY } from 'rxjs';
import { catchError, mergeMap, withLatestFrom } from 'rxjs/operators';

import { Robot } from '../robot';
import { ActionTypes } from './actions';
import { SearchService } from '../search.service';

@Injectable()
export class SearchEffects {
	constructor(
		private action$: Actions,
		private searchService: SearchService,
		private store: Store<{ robots: Robot[], search: string }>
	) {}

	/* A service with an @Effect decorator. 

	Actions is an observable stream of all the actions dispatched
	after the app's state has been reduced. 

	From the actions dispatched, use the ofType operator to 
	filter the actions with the provided type(s).

	mergeMap RxJS operator flattens and merges the actions into
	an Observable. */
	@Effect()
	searchRobots$ = this.action$.pipe(
		ofType(ActionTypes.LoadRobots),
		mergeMap(() => 
			this.searchService.getRobots()
				.then((response) => {
			        return response.json();
			    })
			    .then((users) => {
			        return { 
						type: ActionTypes.LoadSuccess, 
						payload: users 
					}
			    })
			    .catch((error) => {
			    	return {
			    		type: ActionTypes.LoadFailure,
			    		payload: error
			    	}
			    })
		)
	);

	// @Effect()
	// filterRobots$ = this.action$.pipe(
	// 	ofType(ActionTypes.ChangeSearchField),
	// 	withLatestFrom(this.store.select('search')),
	// 	mergeMap(([actions, search]) => 
	// 		this.searchService.getRobots()
	// 			.then((response) => {
	// 		        return response.json();
	// 		    })
	// 		    .then((users) => {
	// 		        return { 
	// 					type: ActionTypes.LoadSuccess, 
	// 					payload: filterArray(users, search.search) 
	// 				}
	// 		    })
	// 		    .catch(() => EMPTY)
	// 	)
	// );

	// filterArray(array, str) {
	// 	console.log("Array: ", array);
	// 	return array.filter((arrayItem) => {
 //    			return arrayItem.name.toLowerCase()
 //    				.includes(str.toLowerCase());
 //    		}
 //    	);
	// }
}