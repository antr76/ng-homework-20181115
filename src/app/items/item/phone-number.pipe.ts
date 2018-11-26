import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string = '', args?: any): any {
    const partOne: string = value.slice(0, 2);
    const partTwo: string = value.slice(2, 5);
    const partThree: string = value.slice(5, 8);
    const partFour: string = value.slice(8, 11);
    return `Tel: +${partOne} ${partTwo} ${partThree} ${partFour}`;
  }

}
