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

  getFilteredRobots(str): Robot[] {
  	return ROBOTS.filter((robot) => {
  			return robot.name.toLowerCase().includes(str.toLowerCase())
  		}
  	);
  }
}
