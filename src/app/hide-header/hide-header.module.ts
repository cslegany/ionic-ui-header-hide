import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HideHeaderPageRoutingModule } from './hide-header-routing.module';

import { HideHeaderPage } from './hide-header.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HideHeaderPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [HideHeaderPage]
})
export class HideHeaderPageModule { }
