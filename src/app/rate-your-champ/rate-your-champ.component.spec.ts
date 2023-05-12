import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateYourChampComponent } from './rate-your-champ.component';



describe('RateYourChampComponent', () => {
  let component: RateYourChampComponent;
  let fixture: ComponentFixture<RateYourChampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateYourChampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateYourChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
