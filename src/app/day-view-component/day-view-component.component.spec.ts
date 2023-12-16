import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayViewComponentComponent } from './day-view-component.component';

describe('DayViewComponentComponent', () => {
  let component: DayViewComponentComponent;
  let fixture: ComponentFixture<DayViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayViewComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
