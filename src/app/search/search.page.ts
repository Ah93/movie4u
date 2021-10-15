import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MovieService} from '../movie.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  actor: any;
  constructor(private router: Router,
    public pProvider: MovieService) { }

  ngOnInit() {
    this.getActors();
  }

  getActors(){
    this.pProvider.getPerson().subscribe(person => {
      this.actor = person['results'];
      console.log(this.actor);
    });
  }

  onEvent(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    if(val.length !== 0){
      this.pProvider.searchPerson(val).subscribe(actor => {
        this.actor = actor['results'];
      });
    } else {
      this.getActors();
    }
  }

  onPersonDetail(id: number) {
    this.router.navigate(['person-detail', id]);
  }


}
