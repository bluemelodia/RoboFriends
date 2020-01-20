import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Robot } from './robot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'robo-friends';
  robots: Robot[];

  constructor(private searchService: SearchService) {

  }

  ngOnInit() {
  	this.robots = this.searchService.getFilteredRobots("");
  }

  userSearched(searchStr) {
  	console.log("Emitted: ", searchStr);
  	this.robots = this.searchService.getFilteredRobots(searchStr);
  	console.log("Robots: ", this.robots);
  }
}
