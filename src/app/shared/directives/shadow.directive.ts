import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({ selector: '[appShadow]' })
export class ShadowDirective {

    @Input() appShadow: string;
    @Input() appShadowX: string;
    @Input() appShadowY: string;
    @Input() appShadowBlur: string;

    constructor(private elem: ElementRef, private renderer: Renderer) {
       // renderer.setElementStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
    }

    ngOnInit() {
      let shadowStr = `${ this.appShadowX } ${ this.appShadowY } ${ this.appShadowBlur } ${ this.appShadow }`;
      this.renderer.setElementStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
    }
}