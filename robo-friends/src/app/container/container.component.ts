import { Component, OnInit } from '@angular/core';
import { Robot } from '../robot';
import { ROBOTS } from '../robots';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  robots: Robot[] = ROBOTS;
  roboURL = "";

  constructor() { }

  ngOnInit() {
  }

  getRobotImage(id) {
  	return "https://robohash.org/" + id + "?size=200x200";
  }
}
