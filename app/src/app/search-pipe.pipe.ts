import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(trandingM:any[], term:string): any[] {
    return trandingM.filter((movie)=>movie.title.toLowerCase().includes(term.toLowerCase()));
  }

}
