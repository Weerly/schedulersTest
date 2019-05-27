import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBlockHeight]'
})
export class BlockHeightDirective implements OnInit{
  // @Input() zoomableHeight: number
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    console.log(this.el);
    // this.el.nativeElement.style.height = (window.screen.availHeight - 140) + "px";
  }

}
