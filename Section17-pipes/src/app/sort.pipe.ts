import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false 
})
export class SortPipe implements PipeTransform {

  private compare(a :any,b:any,propName: string) {
    if (a[propName] < b[propName])
      return -1;
    if (a[propName] > b[propName])
      return 1;
    return 0;
  }

  transform(value: any, propName: string): any {
    if( value.length === 0 )
    {
      return value;
    }
    var rtn = (<Array<any>>value).sort((a,b) => this.compare(a,b,propName));
    return rtn;

  }

}
