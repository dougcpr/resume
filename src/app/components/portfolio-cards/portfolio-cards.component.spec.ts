import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCardsComponent } from './portfolio-cards.component';

describe('PortfolioCardsComponent', () => {
  let component: PortfolioCardsComponent;
  let fixture: ComponentFixture<PortfolioCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
