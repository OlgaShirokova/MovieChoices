import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Choices';
  buttons = ['Click here..', '..or here!'];
  pair = [{
      "poster_path": "/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
      "adult": false,
      "overview": "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell.",
      "release_date": "2017-03-16",
      "genre_ids": [
        10402,
        10751,
        14,
        10749
      ],
      "id": 321612,
      "original_title": "Beauty and the Beast",
      "original_language": "en",
      "title": "Beauty and the Beast",
      "backdrop_path": "/7QshG75xKCmClghQDU1ta2BTaja.jpg",
      "popularity": 150.703083,
      "vote_count": 2695,
      "video": false,
      "vote_average": 6.8
    },
    {
      "poster_path": "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      "adult": false,
      "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      "release_date": "2017-04-24",
      "genre_ids": [
        12,
        28,
        35,
        878
      ],
      "id": 283995,
      "original_title": "Guardians of the Galaxy Vol. 2",
      "original_language": "en",
      "title": "Guardians of the Galaxy Vol. 2",
      "backdrop_path": "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
      "popularity": 93.129598,
      "vote_count": 1811,
      "video": false,
      "vote_average": 7.6
    }]
  movies = [];

  chooseMovie (movie) {
    this.movies.push(movie)
  }
}
