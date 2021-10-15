import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tvshow-detail/:id',
    loadChildren: () => import('./tvshow-detail/tvshow-detail.module').then( m => m.TvshowDetailPageModule)
  },
  {
    path: 'person-detail/:id',
    loadChildren: () => import('./person-detail/person-detail.module').then( m => m.PersonDetailPageModule)
  },
  // {
  //   path: 'tv-shows',
  //   loadChildren: () => import('./tv-shows/tv-shows.module').then( m => m.TVShowsPageModule)
  // },
  // {
  //   path: 'anime',
  //   loadChildren: () => import('./anime/anime.module').then( m => m.AnimePageModule)
  // },
  // {
  //   path: 'search',
  //   loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
