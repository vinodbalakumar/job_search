import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteJobsComponent } from './remote-jobs.component';

describe('RemoteJobsComponent', () => {
  let component: RemoteJobsComponent;
  let fixture: ComponentFixture<RemoteJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
