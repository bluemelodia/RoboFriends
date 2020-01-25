import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Store observable. 
import { select, Store } from '@ngrx/store';

import { SearchService } from './search.service';
import { ChangeSearchField, LoadRobots } from './store/actions';
import { Search } from './store/reducer';
import { Robot } from './robot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'robo-friends';
  robots: Robot[] = [];
  message: string = "";

  error: boolean = false;
  loading: boolean = false;

  // store property will be used to dispatch actions. 
  constructor(private store: Store<Search>) {
    /* Subscribe to the store we registered in AppModule.
    The data returned is the current state of our store. */
    store.pipe(select('search' as any)).subscribe((data) =>
        { 
            this.loading = data.loading;
            this.error = data.error;
            this.robots = this.filterBots(data.robots, data.searchStr);
            this.setMessage();
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

  setMessage() {
      var message;
      if (this.loading) {
          message = "...Loading...";
      } else if (this.error) {
          message = "...Error...Robots On Strike...";
      } else if (this.robots.length === 0) {
          message = "...No Robots Found...";
      } else {
          message = "";
      }

      this.message = message;
  }
}
