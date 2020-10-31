import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './hide-header.directive';
import { FadeHeaderDirective } from './fade-header.directive';



@NgModule({
  declarations: [HideHeaderDirective, FadeHeaderDirective],
  imports: [
    CommonModule
  ],
  exports: [HideHeaderDirective, FadeHeaderDirective]
})
export class SharedDirectivesModule { }
