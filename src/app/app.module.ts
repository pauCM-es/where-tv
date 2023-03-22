import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './ui/components/movie-card/movie-card.component';
import { LandingComponent } from './ui/pages/landing/landing.component';
import { PaginationComponent } from './ui/components/pagination/pagination.component';
import { SharedModule } from './ui/shared/shared.module';
import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './app-routing.module';
import { SearchNavComponent } from './ui/components/search-nav/search-nav.component';
import { FilterPipe } from './ui/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    LandingComponent,
    PaginationComponent,
    SearchNavComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ServicesModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
