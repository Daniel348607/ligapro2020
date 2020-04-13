import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlaveoctComponent } from './llaveoct.component';

describe('LlaveoctComponent', () => {
  let component: LlaveoctComponent;
  let fixture: ComponentFixture<LlaveoctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlaveoctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlaveoctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
