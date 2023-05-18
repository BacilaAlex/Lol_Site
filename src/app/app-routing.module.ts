import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstThingComponent } from './first-thing/first-thing.component';
import { RateYourChampComponent } from './rate-your-champ/rate-your-champ.component';
import { RateChampComponent } from './rate-champ/rate-champ.component';

const routes: Routes = [
  //{ path: '', component: FirstThingComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: FirstThingComponent },
  {
    path: 'RateChampion', component: RateYourChampComponent,
    children: [
      { path: 'Champion/:name', component: RateChampComponent }
    ]
  },
  {
    path: 'RateChampion/:name', component: RateChampComponent,
  },
  {
    path: 'a', component: RateChampComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
