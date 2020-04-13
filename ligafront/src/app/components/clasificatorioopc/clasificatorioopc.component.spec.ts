import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificatorioopcComponent } from './clasificatorioopc.component';

describe('ClasificatorioopcComponent', () => {
  let component: ClasificatorioopcComponent;
  let fixture: ComponentFixture<ClasificatorioopcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificatorioopcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificatorioopcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
