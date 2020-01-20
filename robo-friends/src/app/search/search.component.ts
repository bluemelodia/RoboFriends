import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	@Output() search: EventEmitter<any> = new EventEmitter();

	searchChanged(str) {
		this.search.emit(str);
	}
}
