import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaineangularComponent } from './semaineangular.component';

describe('SemaineangularComponent', () => {
  let component: SemaineangularComponent;
  let fixture: ComponentFixture<SemaineangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemaineangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemaineangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
