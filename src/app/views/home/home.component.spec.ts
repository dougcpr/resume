import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    /* Configure the testing bed with the components that should be tested */
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    /* compile components asynchronously because this creation is slow */
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    /* This will run detect changes which is normally run in the background in dev */
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
