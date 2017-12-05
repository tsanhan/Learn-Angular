import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // this will ensure to update (recalculate) the filter for any update of the data in the page and not only when 'filteredString' is updates... this can couese a lot of events to be thrown (performance issues)
})
export class FilterPipe implements PipeTransform {

  

  transform(value: any, filteredString: string, propName: string): any {
    if( value.length === 0 || filteredString == '')
    {
      return value;
    }
    const resultArray = [];
    for(const item of value){
      
      if(item[propName] === filteredString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
