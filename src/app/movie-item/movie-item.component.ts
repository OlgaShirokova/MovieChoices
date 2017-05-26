import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input()
  movie;

  @Input()
  buttonTitle;

  @Output()
  selectMovie = new EventEmitter();

  @ViewChild('chooseButton')
  button;


  constructor() { }

  ngOnInit() {
    Observable.fromEvent(this.button.nativeElement, 'click')
    .subscribe(event => {
      this.selectMovie.emit(this.movie)
    })
  }

}
