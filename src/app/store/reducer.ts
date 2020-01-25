import { SearchActions, ActionTypes } from './actions';

export const initialState = {
	robots: [],
	search: ""
};

export function SearchReducer(state = initialState, action: SearchActions) {
	console.log('state: ', initialState);
	console.log('action: ', action);
	switch (action.type) {
		case ActionTypes.ChangeSearchField:
			return {
				...state, 
				search: action.payload
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