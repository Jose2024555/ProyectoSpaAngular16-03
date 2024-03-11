import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPutComponent } from './servicios-put.component';

describe('ServiciosPutComponent', () => {
  let component: ServiciosPutComponent;
  let fixture: ComponentFixture<ServiciosPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosPutComponent]
    });
    fixture = TestBed.createComponent(ServiciosPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
