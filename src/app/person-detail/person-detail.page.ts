import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.page.html',
  styleUrls: ['./person-detail.page.scss'],
})
export class PersonDetailPage implements OnInit {
   person: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, public pProvider: MovieService) { }

  ngOnInit() {
    const personId = this.activatedRoute.snapshot.params['id'];
    this.getPersonDetail(personId);
  }

  onMovieDetail(id: number) {
    this.router.navigate(['detail', id]);
  }

  private getPersonDetail(id: number) {
    this.pProvider.getPersonDetails(id).subscribe(res => {
      this.person = res;
    });
  }

}
