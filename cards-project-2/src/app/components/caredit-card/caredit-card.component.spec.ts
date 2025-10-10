import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareditCardComponent } from './caredit-card.component';

describe('CareditCardComponent', () => {
  let component: CareditCardComponent;
  let fixture: ComponentFixture<CareditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareditCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
