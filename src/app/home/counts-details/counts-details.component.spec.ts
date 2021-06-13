import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountsDetailsComponent } from './counts-details.component';

describe('CountsDetailsComponent', () => {
  let component: CountsDetailsComponent;
  let fixture: ComponentFixture<CountsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
