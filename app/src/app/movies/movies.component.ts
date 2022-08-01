import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { SearchPipePipe } from './../search-pipe.pipe';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _ApiService:ApiService) { }
  pages:number[]=[]
  MoviesContanier:any []  = []
  pageNumber:any ;
  term:string = ""
pagination(pageNum:number){
  localStorage.setItem("pageNum",JSON.stringify (pageNum))
  this.pageNumber = pageNum
  this._ApiService.getMovieByPagination(pageNum).subscribe({
    next:(response)=>{
      this.MoviesContanier = response.results
    }
  })
}
  ngOnInit(): void {
    this.pages = new Array(10).fill(0).map((x,i)=>i+1)
    let page:any;
    if(localStorage.getItem("pageNum") == null){
          localStorage.setItem("pageNum",JSON.stringify(1))
          page = localStorage.getItem("pageNum")

          this.pageNumber = page         
          }else{
            page = localStorage.getItem("pageNum");
            this.pageNumber = page
            
          }
    this._ApiService.getMovieByPagination(page).subscribe({
      next:(data)=>{
        
        this.MoviesContanier = data.results
        

        
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
