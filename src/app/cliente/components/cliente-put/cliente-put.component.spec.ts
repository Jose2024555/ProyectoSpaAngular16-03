import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePutComponent } from './cliente-put.component';

describe('ClientePutComponent', () => {
  let component: ClientePutComponent;
  let fixture: ComponentFixture<ClientePutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientePutComponent]
    });
    fixture = TestBed.createComponent(ClientePutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
