import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(Items: any[] , searchItem: any) {

    return searchItem ? Items.filter((item) =>
  
    item.vote_average==searchItem):Items;
    
    }

}
