import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvshowDetailPageRoutingModule } from './tvshow-detail-routing.module';

import { TvshowDetailPage } from './tvshow-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvshowDetailPageRoutingModule
  ],
  declarations: [TvshowDetailPage]
})
export class TvshowDetailPageModule {}
