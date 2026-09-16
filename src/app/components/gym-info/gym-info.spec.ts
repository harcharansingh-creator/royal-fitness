import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymInfo } from './gym-info';

describe('GymInfo', () => {
  let component: GymInfo;
  let fixture: ComponentFixture<GymInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(GymInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
