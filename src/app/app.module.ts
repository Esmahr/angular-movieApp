import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { MovieApiService } from './movie-api.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
