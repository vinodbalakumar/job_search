import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltimeJobsComponent } from './fulltime-jobs.component';

describe('FulltimeJobsComponent', () => {
  let component: FulltimeJobsComponent;
  let fixture: ComponentFixture<FulltimeJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulltimeJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltimeJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
