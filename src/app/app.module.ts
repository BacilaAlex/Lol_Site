import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Firestore
import { environment } from '../environments/environment';
// import { AngularFireModule } from '@angular/fire/';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { AppComponent } from './app.component';
import { RateComponent } from './rate/rate.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstThingComponent } from './first-thing/first-thing.component';
import { RateYourChampComponent } from './rate-your-champ/rate-your-champ.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ChampionSearchComponent } from './champion-search/champion-search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RateChampComponent } from './rate-champ/rate-champ.component';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    RateComponent,
    NavBarComponent,
    FirstThingComponent,
    RateYourChampComponent,
    ChampionSearchComponent,
    SearchBarComponent,
    RateChampComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

