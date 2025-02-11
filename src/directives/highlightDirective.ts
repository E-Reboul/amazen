import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // Nom utilisé dans le template HTML
})
export class HighlightDirective {
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Lorsque la souris entre, change la couleur de fond
  @HostListener('mouseenter') onMouseEnter() {

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'purple');
  }

  // Lorsque la souris sort, remet la couleur de fond à l'initiale
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '');
  }
}