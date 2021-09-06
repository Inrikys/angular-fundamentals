import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertProductDetailsComponent } from './alert-product-details.component';

describe('AlertProductDetailsComponent', () => {
  let component: AlertProductDetailsComponent;
  let fixture: ComponentFixture<AlertProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
