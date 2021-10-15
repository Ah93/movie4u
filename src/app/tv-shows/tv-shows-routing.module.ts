import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TVShowsPage } from './tv-shows.page';

const routes: Routes = [
  {
    path: '',
    component: TVShowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TVShowsPageRoutingModule {}
