import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { DetailComponent } from './pages/detail/detail.component';
import { MovieApiService } from './service/movie-api.service';
import { SearchComponent } from './pages/search/search.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MovieComponent } from './pages/movie/movie.component';
import { FooterComponent } from './components/footer/footer.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { TabItemComponent } from './components/tab-item/tab-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    DetailComponent,
    SearchComponent,
    LoadingComponent,
    MovieComponent,
    FooterComponent,
    WatchlistComponent,
    TabContentComponent,
    TabItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieApiService],
  bootstrap: [AppComponent,SliderComponent,SearchComponent]
})
export class AppModule { }
