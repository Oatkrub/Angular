import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]',
  standalone: true
})
export class AttributeDirectiveDirective {

  constructor(private el : ElementRef) { }
  imageList : string[] = ["2.jpg" , "3.jpg" , "4.jpg"];
  imageIndex : number = 0 ;
  @HostListener('click') onClick () {
    this.imageIndex++ ;
    this.imageIndex %= this.imageList.length ;
    const newSrc = `/assets/image/${this.imageList[this.imageIndex]}`;
    this.el.nativeElement.src = newSrc;
  }
}
