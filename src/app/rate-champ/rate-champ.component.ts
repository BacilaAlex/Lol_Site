import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'

@Component({
  selector: 'app-rate-champ',
  templateUrl: './rate-champ.component.html',
  styleUrls: ['./rate-champ.component.css']
})
export class RateChampComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    this.championName = this.activatedRoute.snapshot.paramMap.get('name')
    this.championId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  championName?: string | null;
  championId?: string | null;

  ngOnInit() {

    //console.log(this.championName);
    //console.log(this.championId);
    this.readData();
  }

  async readData() {
    let app = initializeApp(environment.firebase);
    let db = getFirestore(app);
    let docRef = doc(db, "Champions", (this.championId != null) ? this.championId : '');
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
}
