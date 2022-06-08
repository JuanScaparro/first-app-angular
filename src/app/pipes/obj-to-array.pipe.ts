import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'ObjToArray'
})

export class ObjToArrayPipe implements PipeTransform {

  transform( obj: any = [] ): any {
    return Object.values( obj );
  };

};