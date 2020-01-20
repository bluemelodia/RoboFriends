import { Injectable } from '@angular/core';
import { Robot } from './robot';
import { ROBOTS } from './robots';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  getRobots(): Robot[] {
  	return ROBOTS;
  }

  getFilteredRobots(filter): Robot[] {
  	return ROBOTS.map((robot) => {
  			return robot.toLowerCase().includes(filter);
  		}
  	);
  }
}
