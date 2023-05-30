import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-first-thing',
  templateUrl: './first-thing.component.html',
  styleUrls: ['./first-thing.component.css']
})
export class FirstThingComponent {

  img: string[] = [];
  currentImgIndex: number = 0;

  ngOnInit() {
    this.getAllImg();
    this.startImageRotation();
  }

  getAllImg() {
    let app = initializeApp(environment.firebase);
    let storage = getStorage(app);
    let myPicks = ref(storage, 'Champion_LOL/')
    listAll(myPicks)
      .then(async (res) => {
        const { items } = res;
        const urls = await Promise.all(
          items.map((item) => getDownloadURL(item))
        );
        // Array of download URLs of all files in that folder
        console.log(urls);
        this.img = urls;
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      })
  }
  startImageRotation() {
    this.currentImgIndex = Math.floor(Math.random() * (163 - 0 + 1)) + 0; // Set initial random image index
    interval(2500).subscribe(() => {
      this.currentImgIndex = Math.floor(Math.random() * (163 - 0 + 1)) + 0; // Update image index every second with a new random value
    });
  }
}
