import { Component } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { collection, Firestore, collectionData, getDocs } from '@angular/fire/firestore'
import { getStorage, ref, getDownloadURL } from '@angular/fire/storage'
import { DocumentData, getFirestore } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


interface IChampionData {
  id: string;
  name: string;
  rate: number;
}
interface IimgRef {
  [key: string]: string
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
  championData: DocumentData[];
  imgRef: IimgRef;
  imgJust: string;
  champion: IChampionData[];
  constructor(private fs: Firestore) {
    this.championData = [];
    this.imgRef = {};
    this.imgJust = '';
    this.champion = [];
  }


  ngOnInit() {

    this.getData().then((data: DocumentData[]) => {
      this.championData = data;
      //console.log(this.championData);
    });
    //console.log(this.imgRef);
    // this.getFileSquare("JhinSquare.png").then((data: string) => {
    //   this.imgJust = data;
    // })

  }

  async getData(): Promise<DocumentData[]> {
    let championArray: DocumentData[] = [];
    let app = initializeApp(environment.firebase);
    let db = getFirestore(app);
    let querySnapshot = await getDocs(collection(db, "Champions"));

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      this.getImg(doc.data());


      //console.log({ 'id': doc.id, 'name': doc.data()['name'], 'rate': doc.data()['rate'] });
      this.champion.push({ 'id': doc.id, 'name': doc.data()['name'], 'rate': doc.data()['rate'] });
      this.champion.sort((a, b) => a['name'].localeCompare(b['name']));
      championArray.push(doc.data());
    });
    console.log(championArray.sort((a, b) => a['name'].localeCompare(b['name'])));
    return championArray.sort((a, b) => a['name'].localeCompare(b['name']));
  }

  getImg(data: DocumentData) {
    this.getFileSquare(data['name'] + ".jpg").then((url) => {
      // let el: { [key: string]: string } = {};
      // el[data['name']] = url;
      // console.log(el);

      this.imgRef[data['name']] = url;
    });
  }
  // getChampions(): Observable<IChampionData[]> {
  //   let championRef = collection(this.fs, "Champions")
  //   console.log(collectionData(championRef, { idField: 'id', }) as Observable<IChampionData[]>);
  //   return collectionData(championRef, { idField: 'id', }) as Observable<IChampionData[]>;
  // }


  // getFileSquare(championName: string): string {
  //   let img: string = '';
  //   let storage = getStorage();
  //   let championPath = ref(storage, 'Champion_LOL_Square/' + championName)
  //   this.ngOnInit()
  //   console.log(this.championData);

  //   getDownloadURL(championPath)
  //     .then((url) => {
  //       console.log(url);
  //       img = url;
  //     }
  //     )
  //     .catch((err) => {
  //       console.log("Avem o err ${{err}}" + err);
  //       return null;
  //     })
  //   return img;
  // }
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
  // logImg() {
  //   //console.log(this.imgRef);
  //   this.championData.forEach((champion) => console.log(champion))
  // }
  // observer = new Observable((observer) => {
  //   observer.next(this.championData);
  // })


  searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue
  }

}
