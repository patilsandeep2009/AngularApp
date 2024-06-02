import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistComponent } from './emptest.component';

describe('EmptestComponent', () => {
  let component: EmployeelistComponent;
  let fixture: ComponentFixture<EmployeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});