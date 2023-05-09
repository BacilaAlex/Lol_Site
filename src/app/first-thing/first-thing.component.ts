import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-first-thing',
  templateUrl: './first-thing.component.html',
  styleUrls: ['./first-thing.component.css']
})
export class FirstThingComponent {
  @ViewChild(".content") bg: any;

  ChangeBackgroungImg(): void {
  }

}
