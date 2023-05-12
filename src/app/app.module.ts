import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RateComponent } from './rate/rate.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstThingComponent } from './first-thing/first-thing.component';
import { RateYourChampComponent } from './rate-your-champ/rate-your-champ.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RateComponent,
    NavBarComponent,
    FirstThingComponent,
    RateYourChampComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

