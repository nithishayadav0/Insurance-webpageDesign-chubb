import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertTeamsComponent } from './expteam-section.component';

describe('ExpertTeamsComponent', () => {
  let component: ExpertTeamsComponent;
  let fixture: ComponentFixture<ExpertTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertTeamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
