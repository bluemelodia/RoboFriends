import { SearchActions, ActionTypes } from './actions';
import { Robot } from '../robot';

export type Search = {
	robots: Robot[], 
	searchStr: string
};

export const initialState: Search = {
	robots: [],
	searchStr: ""
};

export function SearchReducer(state = initialState, action: SearchActions) {
	switch (action.type) {
		case ActionTypes.ChangeSearchField:
			return {
				...state, 
				searchStr: action.payload
			};
		case ActionTypes.LoadSuccess:
			return {
				...state,
				robots: action.payload
			}
		default:
			return state;
	}
}