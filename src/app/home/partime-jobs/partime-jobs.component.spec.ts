import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartimeJobsComponent } from './partime-jobs.component';

describe('PartimeJobsComponent', () => {
  let component: PartimeJobsComponent;
  let fixture: ComponentFixture<PartimeJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartimeJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartimeJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
