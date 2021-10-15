import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public baseURL = 'https://api.themoviedb.org/3/';
  public apiKey = 'api_key=4bc0b21bc659928ed51531d29e302659';
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
 // Get Movies Queries

  getInTheaters(){
    const url = this.baseURL + 'movie/now_playing?' + this.apiKey;
    return this.http.get(url);
  }

  getPopular(){
    const url = this.baseURL + 'movie/popular?' + this.apiKey;
    return this.http.get(url);
  }

  getTopRated(){
    const url = this.baseURL + 'movie/top_rated?' + this.apiKey;
    return this.http.get(url);
  }

  getUpcoming(){
    const url = this.baseURL + 'movie/upcoming?' + this.apiKey;
    return this.http.get(url);
  }

  getLatest(){
    const url = this.baseURL + 'movie/latest?' + this.apiKey;
    return this.http.get(url);
  }

  searchMovies(query){
    const url = this.baseURL + 'search/movie?query=' + query +'&' + this.apiKey;
    return this.http.get(url);
  }

  getMovieDetails(movieID){
    const url = this.baseURL + 'movie/' + movieID + '?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  getVideos(movieID){
    const url = this.baseURL + 'movie/' + movieID + '/videos?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  // Get TV Shows Queries
  getTodayShow(){
    const url = this.baseURL + 'tv/airing_today?' + this.apiKey;
    return this.http.get(url);
  }

  getPopularShow(){
    const url = this.baseURL + 'tv/popular?' + this.apiKey;
    return this.http.get(url);
  }

  getTopRatedShow(){
    const url = this.baseURL + 'tv/top_rated?' + this.apiKey;
    return this.http.get(url);
  }

  getOnTheAir(){
    const url = this.baseURL + 'tv/on_the_air?' + this.apiKey;
    return this.http.get(url);
  }

  getLatestShow(){
    const url = this.baseURL + 'tv/latest?' + this.apiKey;
    return this.http.get(url);
  }

  searchTVShow(queryShow){
    const url = this.baseURL + 'search/tv?query=' + queryShow +'&' + this.apiKey;
    return this.http.get(url);
  }

  searchPerson(queryPerson){
    const url = this.baseURL + 'search/person?query=' + queryPerson +'&' + this.apiKey;
    return this.http.get(url);
  }

  getPerson(){
    const url = this.baseURL + 'person/popular?' + this.apiKey;
    return this.http.get(url);
  }

  getPersonDetails(pID){
    const url = this.baseURL + 'person/' + pID + '?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  getShowDetails(tvID){
    const url = this.baseURL + 'tv/' + tvID + '?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  getShowVideos(tvID){
    const url = this.baseURL + 'tv/' + tvID + '/videos?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }
}
