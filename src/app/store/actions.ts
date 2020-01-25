import { Action } from '@ngrx/store';
import { Robot } from '../robot';

export enum ActionTypes {
	ChangeSearchField = "[Search] Change search field.",
	LoadRobots = "[Search] Search for robots.",
	LoadSuccess = "[Search] Successfully retrieved robots.",
	LoadFailure = "[Search] Failed to retrieve robots."
}

export class ChangeSearchField implements Action {
	readonly type = ActionTypes.ChangeSearchField;
	constructor(public payload: String) {}
}

export class LoadRobots implements Action {
	readonly type = ActionTypes.LoadRobots;

	constructor() {}
}

export class LoadSuccess implements Action {
	readonly type = ActionTypes.LoadSuccess;

	constructor(public payload: Robot[]) {}
}

export class LoadFailure implements Action {
	readonly type = ActionTypes.LoadFailure;

	constructor() {}
}

export type SearchActions = ChangeSearchField | LoadRobots | LoadSuccess | LoadFailure;