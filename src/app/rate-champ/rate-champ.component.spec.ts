import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateChampComponent } from './rate-champ.component';

describe('RateChampComponent', () => {
  let component: RateChampComponent;
  let fixture: ComponentFixture<RateChampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateChampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
