import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TVShowsPageRoutingModule } from './tv-shows-routing.module';

import { TVShowsPage } from './tv-shows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TVShowsPageRoutingModule
  ],
  declarations: [TVShowsPage]
})
export class TVShowsPageModule {}
