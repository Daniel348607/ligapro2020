import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneosopcComponent } from './torneosopc.component';

describe('TorneosopcComponent', () => {
  let component: TorneosopcComponent;
  let fixture: ComponentFixture<TorneosopcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorneosopcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneosopcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
