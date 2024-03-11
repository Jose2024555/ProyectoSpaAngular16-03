import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteGetComponent } from './cliente-get.component';

describe('ClienteGetComponent', () => {
  let component: ClienteGetComponent;
  let fixture: ComponentFixture<ClienteGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteGetComponent]
    });
    fixture = TestBed.createComponent(ClienteGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
