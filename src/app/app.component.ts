import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Robot } from './robot';

// Store observable. 
import { select, Store } from '@ngrx/store';
import { ChangeSearchField, LoadRobots } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'robo-friends';
  robots: Robot[] = [];

  // store property will be used to dispatch actions. 
  constructor(private store: Store<{ robots: Robot[], search: string }>) {
    /* Subscribe to the store we registered in AppModule.
    The data returned is the current state of our store. */
    store.pipe(select('search'))
      .subscribe((data) =>
        { 
            this.robots = this.filterBots(data.robots, data.search);
        }
    );
  }

  ngOnInit() {
    this.getRobots();
  }

  getRobots() {
    this.store.dispatch(new LoadRobots());
    // this.searchService.roboSource.subscribe(
    //   robots => {
    //     this.robots = robots;
    //     this.filteredBots = this.robots;
    //  });
  }

  userSearched(searchStr) {
    this.store.dispatch(new ChangeSearchField(searchStr));
    // this.filteredBots = this.robots.filter((robot) => {
    //     return robot.name.toLowerCase().includes(searchStr.toLowerCase())
    //   }
    // );
  }

  filterBots(robots, searchStr) {
    return robots.filter((robot) => {
        return robot.name.toLowerCase()
          .includes(searchStr.toLowerCase())
      }
    );
  }
}
