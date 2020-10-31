import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController, IonToolbar } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';

@Directive({
  selector: '[appFadeHeader]'
})
export class FadeHeaderDirective {

  @Input('appFadeHeader') toolbar: IonToolbar;
  toolbarHtmlElement: HTMLElement;

  constructor(private domCtrl: DomController) {
  }

  ngOnInit() {
    this.toolbarHtmlElement = (this.toolbar as any).el; //el is a protected property
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: CustomEvent<ScrollDetail>) {
    let scrollTop: number = Math.round($event.detail.scrollTop); //important to round
    if (scrollTop >= 255) {
      scrollTop = 255;
    }
    let hexDist = scrollTop.toString(16); //hex string
    this.domCtrl.write(() => {
      this.toolbarHtmlElement.style.setProperty('--background', `#f4f5f8${hexDist}`);
    });
  }
}
