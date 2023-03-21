import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneUSerComponent } from './one-user.component';

describe('OneUSerComponent', () => {
  let component: OneUSerComponent;
  let fixture: ComponentFixture<OneUSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OneUSerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
