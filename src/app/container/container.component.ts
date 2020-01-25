import { Component, OnInit, Input } from '@angular/core';
import { Robot } from '../robot';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() robots: Robot[];
  @Input() message: string;

  constructor() {
  }

  ngOnInit() {
  }

  getRobotImage(id) {
  	return "https://robohash.org/" + id + "?size=200x200";
  }
}
