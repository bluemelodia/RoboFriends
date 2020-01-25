import { SearchActions, ActionTypes } from './actions';
import { Robot } from '../robot';

export type Search = {
	robots: Robot[], 
	searchStr: string,
	loading: boolean
	error: boolean
};

export const initialState: Search = {
	robots: [],
	searchStr: "",
	loading: false,
	error: false
};

export function SearchReducer(state = initialState, action: SearchActions) {
	console.log("Called: ", action.type);

	switch (action.type) {
		case ActionTypes.LoadRobots: 
			return {
				...state,
				loading: true,
				error: false
			}
		case ActionTypes.ChangeSearchField:
			return {
				...state, 
				searchStr: action.payload
			};
		case ActionTypes.LoadSuccess:
			return {
				...state,
				robots: action.payload, 
				loading: false,
				error: false
			}
		case ActionTypes.LoadFailure:
			return {
				...state,
				loading: false,
				error: true
			}
		default:
			return state;
	}
}