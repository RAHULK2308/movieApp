import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Items: any[] , searchItem: any) {
   
     return searchItem ? Items.filter((item) =>
     item.release_date.indexOf(searchItem) !== -1):Items ;
  }

}
