import { Component } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { collection, Firestore, collectionData, getDocs } from '@angular/fire/firestore'
import { getStorage, ref, getDownloadURL } from '@angular/fire/storage'
import { DocumentData, getFirestore } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface IChampionData {
  //id: string;
  name: string;
}
interface IFileUpload {
  key: string;
  name: string;
  url: string;
  file: File;
}


@Component({
  selector: 'app-champion-search',
  templateUrl: './champion-search.component.html',
  styleUrls: ['./champion-search.component.css']
})

export class ChampionSearchComponent {
  constructor(private fs: Firestore) { }

  //championData: IChampionData[] = [];
  championData: DocumentData[] = [];
  ngOnInit() {
    // this.getChampions().subscribe((data: IChampionData[]) => {
    //   this.championData = data;
    //   console.log(this.championData);
    // });
    this.getData().then((data: DocumentData[]) => {
      this.championData = data;
      console.log(this.championData);
    });
    
  }

  async getData(): Promise<DocumentData[]> {
    let championArray: DocumentData[] = [];
    let app = initializeApp(environment.firebase);
    let db = getFirestore(app);
    let querySnapshot = await getDocs(collection(db, "Champions"));

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data() as IChampionData);
      championArray.push(doc.data());
    });
    //console.log(championArray);
    return championArray;
  }

  // getChampions(): Observable<IChampionData[]> {
  //   let championRef = collection(this.fs, "Champions")
  //   console.log(collectionData(championRef, { idField: 'id', }) as Observable<IChampionData[]>);
  //   return collectionData(championRef, { idField: 'id', }) as Observable<IChampionData[]>;
  // }
  imgRef: string = this.getFileSquare('AatroxSquare.png');

  getFileSquare(championName: string): string {
    let img: string = '';
    let storage = getStorage();
    let championPath = ref(storage, 'Champion_LOL_Square/' + championName)
    this.ngOnInit()
    console.log(this.championData);

    getDownloadURL(championPath)
      .then((url) => {
        console.log(url);
        img = url;
      }
      )
      .catch((err) => {
        console.log("Avem o err ${{err}}" + err);
        return null;
      })
    return img;
  }
}
