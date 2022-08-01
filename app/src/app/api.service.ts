import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) { }
  // getData():Observable<any>{
  //   return this._HttpClient.get('https://jsonplaceholder.typicode.com/posts');
  // }
  
  // getNowPlaying():Observable<any>{
  //   return this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=978e78abb24a4a96e6d401aad2542b97&fbclid=IwAR0KTsi8TUQOX3cgk4WQN_gKaFIIXqIG_eUgGsY51H3ZvBYqZ8hPCPgLRd4&language=en-US&page=1`)
  // }
  getMovieByPagination(num:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=978e78abb24a4a96e6d401aad2542b97&fbclid=IwAR0KTsi8TUQOX3cgk4WQN_gKaFIIXqIG_eUgGsY51H3ZvBYqZ8hPCPgLRd4&language=en-US&page=${num}`)
  }
  getSingleMovie(id:any):Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=978e78abb24a4a96e6d401aad2542b97&fbclid=IwAR0KTsi8TUQOX3cgk4WQN_gKaFIIXqIG_eUgGsY51H3ZvBYqZ8hPCPgLRd4")
  }
  getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=978e78abb24a4a96e6d401aad2542b97&fbclid=IwAR0KTsi8TUQOX3cgk4WQN_gKaFIIXqIG_eUgGsY51H3ZvBYqZ8hPCPgLRd4`)
  }
  userName:string = 'ahmed'
}
