import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FadeHeaderPage } from './fade-header.page';

const routes: Routes = [
  {
    path: '',
    component: FadeHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FadeHeaderPageRoutingModule {}
