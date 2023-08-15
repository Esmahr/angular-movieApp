import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from '../app/movie/movie.component';
import { DetailComponent } from '../app/components/detail/detail.component';
import { SearchComponent } from '../app/components/search/search.component';

const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'movie/:id', component: DetailComponent },
  { path: 'search', component: SearchComponent },
  { path: "details/:id", component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

