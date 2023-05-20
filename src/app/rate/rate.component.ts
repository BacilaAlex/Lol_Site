import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.championName = this.activatedRoute.snapshot.paramMap.get('name')
    this.championId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  championName?: string | null;
  championId?: string | null;
  rateChampion: number = 0;

  ngOnInit() {

  }

  async readData() {
    let app = initializeApp(environment.firebase);
    let db = getFirestore(app);
    let docRef = doc(db, "Champions", (this.championId != null) ? this.championId : '');
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      this.rateChampion = docSnap.data()['rate'];
    } else {
      console.log("No such document!");
    }
  }

  async updateData() {
    this.readData();
    let app = initializeApp(environment.firebase);
    let db = getFirestore(app);
    let dataRef = doc(db, "Champions", (this.championId != null) ? this.championId : '');
    await updateDoc(dataRef, {
      rate: this.rateChampion
    });
  }

  click1() { this.rateChampion = (this.rateChampion + 1) / 2 }
  click2() { this.rateChampion = (this.rateChampion + 2) / 2 }
  click3() { this.rateChampion = (this.rateChampion + 3) / 2 }
  click4() { this.rateChampion = (this.rateChampion + 4) / 2 }
  click5() { this.rateChampion = (this.rateChampion + 5) / 2 }
}
