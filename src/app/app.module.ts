import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RateComponent } from './rate/rate.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstThingComponent } from './first-thing/first-thing.component';
import { RateYourChampComponent } from './rate-your-champ/rate-your-champ.component';

@NgModule({
  declarations: [
    AppComponent,
    RateComponent,
    NavBarComponent,
    FirstThingComponent,
    RateYourChampComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
