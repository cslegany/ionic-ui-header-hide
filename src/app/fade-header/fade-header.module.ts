import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FadeHeaderPageRoutingModule } from './fade-header-routing.module';

import { FadeHeaderPage } from './fade-header.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FadeHeaderPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [FadeHeaderPage]
})
export class FadeHeaderPageModule {}
