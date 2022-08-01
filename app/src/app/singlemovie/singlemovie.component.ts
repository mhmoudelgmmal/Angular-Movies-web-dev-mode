import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SinglemovieComponent implements OnInit {
  constructor(private _ApiService:ApiService,private _ActivatedRoute:ActivatedRoute) { }
  movieDetails:any;
  ImgPath:string = 'https://image.tmdb.org/t/p/w500/';

  
  ngOnInit(): void {
    let MovieId = this._ActivatedRoute.snapshot.params['id']
    this._ApiService.getSingleMovie(MovieId).subscribe({
      next:(data)=>{
        this.movieDetails = data
      },
      error:(err)=>{
      }
    })
  }

}
