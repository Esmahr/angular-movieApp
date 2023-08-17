import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './pages/movie/movie.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SearchComponent } from './pages/search/search.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';

const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'movie/:id', component: DetailComponent },
  { path: 'search', component: SearchComponent },
  { path: "details/:id", component: DetailComponent },
  { path: "watchlist", component: WatchlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

