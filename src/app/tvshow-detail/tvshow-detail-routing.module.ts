import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvshowDetailPage } from './tvshow-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TvshowDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvshowDetailPageRoutingModule {}
