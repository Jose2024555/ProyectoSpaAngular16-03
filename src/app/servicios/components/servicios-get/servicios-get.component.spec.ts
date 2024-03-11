import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosGetComponent } from './servicios-get.component';

describe('ServiciosGetComponent', () => {
  let component: ServiciosGetComponent;
  let fixture: ComponentFixture<ServiciosGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosGetComponent]
    });
    fixture = TestBed.createComponent(ServiciosGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
