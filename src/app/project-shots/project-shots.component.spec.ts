import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectShotsComponent } from './project-shots.component';

describe('ProjectShotsComponent', () => {
  let component: ProjectShotsComponent;
  let fixture: ComponentFixture<ProjectShotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectShotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
