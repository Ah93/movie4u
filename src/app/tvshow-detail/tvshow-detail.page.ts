import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {MovieService} from '../movie.service';
// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tvshow-detail',
  templateUrl: './tvshow-detail.page.html',
  styleUrls: ['./tvshow-detail.page.scss'],
})
export class TvshowDetailPage implements OnInit {
  tvshow: any;
  constructor(public navCtrl: NavController, public navParams: ActivatedRoute, public tvshowProvider: MovieService) { }

  ngOnInit() {
    const tvID = this.navParams.snapshot.params['id'];
    this.getShowDetail(tvID);
  }

  getShowDetail(tvID: number) {
    this.tvshowProvider.getShowDetails(tvID).subscribe(res => {
      this.tvshow = res;
    });
  }

}
