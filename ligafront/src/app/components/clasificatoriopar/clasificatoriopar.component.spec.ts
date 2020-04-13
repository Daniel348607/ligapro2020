import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificatorioparComponent } from './clasificatoriopar.component';

describe('ClasificatorioparComponent', () => {
  let component: ClasificatorioparComponent;
  let fixture: ComponentFixture<ClasificatorioparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificatorioparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificatorioparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
