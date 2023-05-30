import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { DocumentData, collection, doc, getDoc, getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

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
  championData: DocumentData | undefined;
  championImgUrl: string = '';

  async ngOnInit() {

    //console.log(this.championName);
    //console.log(this.championId);
    this.championData = await this.readData();
    this.getImg();
  }

  async readData(): Promise<DocumentData | undefined> {
    let app = initializeApp(environment.firebase);
    let db = getFirestore(app);
    let docRef = doc(db, "Champions", (this.championId != null) ? this.championId : '');
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return undefined;
    }
  }

  getImg() {
    this.getFileSquare(this.championName + ".jpg").then((url) => {
      this.championImgUrl = url;
    });
  }
  getFileSquare(championName: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let storage = getStorage();
      let championPath = ref(storage, 'Champion_LOL/' + championName);

      getDownloadURL(championPath)
        .then((url) => {
          resolve(url);
        })
        .catch((err) => {
          console.log("An error occurred: " + err);
          reject(err);
        });
    });
  }
}
