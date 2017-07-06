import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencyBarComponent } from './proficiency-bar.component';

describe('ProficiencyBarComponent', () => {
  let component: ProficiencyBarComponent;
  let fixture: ComponentFixture<ProficiencyBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProficiencyBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProficiencyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
