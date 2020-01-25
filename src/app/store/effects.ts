import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { SearchService } from '../search.service';

@Injectable()
export class SearchEffects {
	constructor(
		private action$: Actions,
		private searchService: SearchService
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
			    	console.log("RESPONSE: ", users);

			        return { 
						type: ActionTypes.LoadSuccess, 
						payload: users 
					}
			    })
			    .catch(() => EMPTY)
		)
	);
}