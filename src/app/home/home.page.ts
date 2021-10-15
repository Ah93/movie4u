import { Component } from '@angular/core';
import {MovieService} from '../movie.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segment: string;
  moviesInTheaters: any = [];
  moviesPopular: any = [];
  moviesTopRated: any = [];
  moviesUpcoming: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';
  segmentModel = '';
  constructor(public navCtrl: NavController, public movie: MovieService,private router: Router) {
    this.segmentModel = "now_playing";
    this.loadInTheaters();
    this.loadPopular();
    this.loadTopRated();
    this.loadUpcoming();
  }

  loadInTheaters(){
    this.movie.getInTheaters().subscribe(lmovies => {
      this.moviesInTheaters = lmovies['results'];
    });
  }

  loadPopular(){
    this.movie.getPopular().subscribe(pmovies => {
      this.moviesPopular = pmovies['results'];
    });
  }

  loadTopRated(){
    this.movie.getTopRated().subscribe(trmovies => {
      this.moviesTopRated = trmovies['results'];
    });
  }

  loadUpcoming(){
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.movie.getUpcoming().subscribe(Umovies => {
      this.moviesUpcoming = Umovies['results'];
    });
  }


  getDetails(id: number) {
    this.router.navigate(['detail', id]);
  }

  onEvent(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    //search in theatre
    if(val.length !== 0 && this.segmentModel === 'now_playing'){
      this.movie.searchMovies(val).subscribe(movies => {
        this.moviesInTheaters = movies['results'];
      });
    }
    else {
      this.loadInTheaters();
    }

    //search popular
    if(val.length !== 0 && this.segmentModel === 'popular'){
      this.movie.searchMovies(val).subscribe(movies => {
        this.moviesPopular = movies['results'];
      });
    }
    else {
      this.loadPopular();
    }

    //search top-rated
    if(val.length !== 0 && this.segmentModel === 'top_rated'){
      this.movie.searchMovies(val).subscribe(movies => {
        this.moviesTopRated = movies['results'];
      });
    }
    else {
      this.loadTopRated();
    }

    //search top-rated
    if(val.length !== 0 && this.segmentModel === 'upcoming'){
      this.movie.searchMovies(val).subscribe(movies => {
        this.moviesUpcoming = movies['results'];
      });
    }
    else {
      this.loadUpcoming();
    }



  }


}
