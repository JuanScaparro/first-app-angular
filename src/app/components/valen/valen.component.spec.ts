import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValenComponent } from './valen.component';

describe('ValenComponent', () => {
  let component: ValenComponent;
  let fixture: ComponentFixture<ValenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
