import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePostComponent } from './ClientePostComponent';

describe('ClientePostComponent', () => {
  let component: ClientePostComponent;
  let fixture: ComponentFixture<ClientePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientePostComponent]
    });
    fixture = TestBed.createComponent(ClientePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
