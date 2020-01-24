import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Robot } from './robot';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // Create a new Observable to deliver robots
  roboSource = new Observable(this.robotSubscriber);
  robots: Robot[] = [];

  // Runs when subscribe() is called
  robotSubscriber(observer) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        this.robots = users;
        observer.next(this.robots);
        observer.complete();
    });
  }

  getFilteredBots(searchStr) {
    console.log("ROBOTS: ", this.robots);
    return this.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchStr.toLowerCase())
      }
    );
  }
}
