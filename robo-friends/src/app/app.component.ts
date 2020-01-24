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
  robots: Robot[] = [];

  constructor(private searchService: SearchService) {

  }

  ngOnInit() {
    this.getRobots();
  }

  getRobots() {
    this.searchService.roboSource.subscribe(
      robots => {
        this.robots = robots;
     });
  }

  userSearched(searchStr) {
    this.robots = this.searchService.getFilteredBots(searchStr);
  }
}
