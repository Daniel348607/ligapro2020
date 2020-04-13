import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificatoriogruComponent } from './clasificatoriogru.component';

describe('ClasificatoriogruComponent', () => {
  let component: ClasificatoriogruComponent;
  let fixture: ComponentFixture<ClasificatoriogruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificatoriogruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificatoriogruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
