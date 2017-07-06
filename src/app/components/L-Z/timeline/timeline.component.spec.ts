import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGraphicComponent } from './timeline.component';

describe('InfoGraphicComponent', () => {
  let component: InfoGraphicComponent;
  let fixture: ComponentFixture<InfoGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
