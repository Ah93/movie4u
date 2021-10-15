import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.page.html',
  styleUrls: ['./tv-shows.page.scss'],
})
export class TVShowsPage implements OnInit {
  showArrivingToday: any = [];
  showPopular: any = [];
  showTopRated: any = [];
  showLatest: any = [];
  segmentModel = '';
  constructor(public navCtrl: NavController, public tvshow: MovieService,private router: Router) {
    this.segmentModel = "Atoday";
   }

   ngOnInit() {
    this.loadArrivingToday();
    this.loadshowTopRated();
    this.loadshowPopular();
  }

  loadArrivingToday(){
    this.tvshow.getTodayShow().subscribe(tshows => {
      this.showArrivingToday = tshows['results'];
      console.log(this.showArrivingToday);
    });
  }

  loadshowPopular(){
    this.tvshow.getPopularShow().subscribe(pshows => {
      this.showPopular = pshows['results'];
    });
  }

  loadshowTopRated(){
    this.tvshow.getTopRatedShow().subscribe(trshows => {
      this.showTopRated = trshows['results'];
    });
  }


  getShowDetails(id: number) {
    this.router.navigate(['tvshow-detail', id]);
  }

  onEvent(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    //search in theatre
    if(val.length !== 0 && this.segmentModel === 'Atoday'){
      this.tvshow.searchTVShow(val).subscribe(movies => {
        this.showArrivingToday = movies['results'];
      });
    }
    else {
      this.loadArrivingToday();
    }

    //search popular
    if(val.length !== 0 && this.segmentModel === 'spopular'){
      this.tvshow.searchTVShow(val).subscribe(movies => {
        this.showPopular = movies['results'];
      });
    }
    else {
      this.loadshowPopular();
    }

    //search top-rated
    if(val.length !== 0 && this.segmentModel === 'stop_rated'){
      this.tvshow.searchMovies(val).subscribe(movies => {
        this.showTopRated = movies['results'];
      });
    }
    else {
      this.loadshowTopRated();
    }


  }

}
