import { Component } from '@angular/core';
import { collection, Firestore, collectionData, } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

interface IChampionData {
  id: string;
  name: string;
}


@Component({
  selector: 'app-champion-search',
  templateUrl: './champion-search.component.html',
  styleUrls: ['./champion-search.component.css']
})

export class ChampionSearchComponent {
  constructor(private fs: Firestore) { }

  championData: IChampionData[] = [];


  ngOnInit() {
    this.getChampions().subscribe((data: IChampionData[]) => {
      this.championData = data;
      console.log(this.championData);
    });
  }

  getChampions(): Observable<IChampionData[]> {
    let championRef = collection(this.fs, "Champions")
    console.log(collectionData(championRef, { idField: 'id', }) as Observable<IChampionData[]>);
    return collectionData(championRef, { idField: 'id', }) as Observable<IChampionData[]>;
  }

}
