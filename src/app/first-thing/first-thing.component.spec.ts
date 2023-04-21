import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstThingComponent } from './first-thing.component';

describe('FirstThingComponent', () => {
  let component: FirstThingComponent;
  let fixture: ComponentFixture<FirstThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstThingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
