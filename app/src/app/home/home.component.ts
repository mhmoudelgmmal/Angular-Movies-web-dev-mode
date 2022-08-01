import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _ApiService:ApiService) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'
  trendingMoviesAll:any[] = []
  trendingMovies:any[] = []
  trendingTv:any[] = []
  trendingPerson:any[] = []
  ngOnInit(): void {
    this._ApiService.getTrending('movie').subscribe({
      next:(response)=> {
this.trendingMoviesAll = response.results
        return this.trendingMovies = response.results.slice(0,10)
      }
    })
    this._ApiService.getTrending('tv').subscribe({
      next:(response)=> this.trendingTv = response.results.slice(0,10)
    })
    this._ApiService.getTrending('person').subscribe({
      next:(response)=>{
        for (let i = 0; i < response.results.length; i++) {
          if (response.results[i].profile_path == null) {
              response.results[i].profile_path = "../../assets/blank-profile-picture-973460__340.webp"
            
          }else{
            response.results[i].profile_path = this.imgPrefix+response.results[i].profile_path;
           
          }
          
          }
          this.trendingPerson = response.results.slice(0,10)
          
      } 
      

    })
  }

}
