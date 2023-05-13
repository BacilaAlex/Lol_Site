import { Component } from '@angular/core';
import championData from '../../../baza_deta.json'

interface IchampionData {
  id: number;
  src: string;
  name: string;
}


@Component({
  selector: 'app-champion-search',
  templateUrl: './champion-search.component.html',
  styleUrls: ['./champion-search.component.css']
})

export class ChampionSearchComponent {
  championData: IchampionData[] = championData;
}
