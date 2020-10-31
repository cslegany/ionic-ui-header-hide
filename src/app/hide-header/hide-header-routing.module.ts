import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HideHeaderPage } from './hide-header.page';

const routes: Routes = [
  {
    path: '',
    component: HideHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HideHeaderPageRoutingModule {}
