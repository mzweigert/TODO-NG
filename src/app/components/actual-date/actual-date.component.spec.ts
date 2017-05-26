import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualDateComponent } from './actual-date.component';

describe('ActualDateComponent', () => {
  let component: ActualDateComponent;
  let fixture: ComponentFixture<ActualDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
