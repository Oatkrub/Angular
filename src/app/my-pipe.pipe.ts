import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './demographic-form/demographic-form.component';
@Pipe({
  name: 'myPipe',
  standalone: true
})
export class MyPipePipe implements PipeTransform {

  transform(value: Data, ...args: unknown[]): string {
    if (!value) {
      return '' ;
    }
    
    return `My name is ${value.name} ${value.lastName}. I am ${value.age} years old. I lived at ${value.address}`
    
  }

}
