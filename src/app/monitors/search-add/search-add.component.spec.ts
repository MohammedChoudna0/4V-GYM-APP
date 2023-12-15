import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAddComponent } from './search-add.component';

describe('SearchAddComponent', () => {
  let component: SearchAddComponent;
  let fixture: ComponentFixture<SearchAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
