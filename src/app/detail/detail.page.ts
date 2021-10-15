import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {MovieService} from '../movie.service';
// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  movie: any;

  constructor(public navCtrl: NavController, public navParams: ActivatedRoute, public movieProvider: MovieService) {
   }

  ngOnInit() {
    const movieId = this.navParams.snapshot.params['id'];
    this.getMovieDetail(movieId);
  }

  getMovieDetail(movieID: number) {
    this.movieProvider.getMovieDetails(movieID).subscribe(res => {
      this.movie = res;
    });
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DetailPage');
  // }

  // getMovie(movieID) {
  //   this.movieProvider.getMovieDetails(movieID).subscribe(movieDetails => {
  //     this.movieDetails = movieDetails;
  //     this.geners = this.movieDetails['geners'];
  //     console.log(this.geners);
  //     this.Budget = this.movieDetails['budget'];
  //     this.revenue = this.movieDetails['revenue'];
  //     this.status = this.movieDetails['status'];
  //   });
  // }

  // loadVideos(movieID){
  //   this.movieProvider.getVideos(movieID).subscribe(videos => {
  //     this.videos = videos['results'];
  //   });
  // }

  // openVideo(videoID){
  //   this.youtube.openVideo(videoID);
  // }

}
