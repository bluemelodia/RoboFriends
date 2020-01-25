import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Robot } from './robot';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  getRobots() {
    return fetch('https://jsonplaceholder.typicode.com/users');
  }

  /*
  // Create a new Observable to deliver robots
  roboSource = new Observable<Robot[]>(this.robotSubscriber);

  // Runs when subscribe() is called
  robotSubscriber(observer) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        observer.next(users);
        observer.complete();
    });
  }
  */
}
