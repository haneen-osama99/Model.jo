import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyhamComponent } from './ayham.component';

describe('AyhamComponent', () => {
  let component: AyhamComponent;
  let fixture: ComponentFixture<AyhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
