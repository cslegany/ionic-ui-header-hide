import { AfterViewInit, Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController, IonToolbar } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements AfterViewInit {

  @Input('appHideHeader') toolbar: IonToolbar;
  private toolbarHeight = 44;
  toolbarHtmlElement: HTMLElement;

  constructor(private renderer: Renderer2, private domCtrl: DomController) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.toolbarHtmlElement = (this.toolbar as any).el; //el is a protected property
      this.domCtrl.read(() => {
        this.toolbarHeight = this.toolbarHtmlElement.clientHeight;
        //console.log('toolbarHeight: ', this.toolbarHeight)
      });
    }, 500); //some timeout is needed to guarantee that toolbar height isn't 0
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: CustomEvent<ScrollDetail>) {
    //console.log($event);
    const scrollTop = $event.detail.scrollTop;
    let newPosition: number = -(scrollTop / 5);

    if (newPosition < -this.toolbarHeight) {
      newPosition = -this.toolbarHeight;
    }
    let newOpacity: number = 1 - (newPosition / -this.toolbarHeight);

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.toolbarHtmlElement, 'top', `${newPosition}px`);
      this.renderer.setStyle(this.toolbarHtmlElement, 'opacity', newOpacity);
    });
  }
}
