import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionSearchComponent } from '../champion-search/champion-search.component'

@Component({
  selector: 'app-rate-champ',
  templateUrl: './rate-champ.component.html',
  styleUrls: ['./rate-champ.component.css']
})
export class RateChampComponent {

  // constructor(private activatedRoute: ActivatedRoute) { }

  // championName: any;

  // ngOnInit() {
  //   this.championName = this.activatedRoute.snapshot.paramMap.get('name');
  // }
}
