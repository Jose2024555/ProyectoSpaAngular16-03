import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPostComponent } from './servicios-post.component';

describe('ServiciosPostComponent', () => {
  let component: ServiciosPostComponent;
  let fixture: ComponentFixture<ServiciosPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosPostComponent]
    });
    fixture = TestBed.createComponent(ServiciosPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
