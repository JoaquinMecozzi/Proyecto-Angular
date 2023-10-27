import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoAgregarEditarComponent } from './empleado-agregar-editar.component';

describe('EmpleadoAgregarEditarComponent', () => {
  let component: EmpleadoAgregarEditarComponent;
  let fixture: ComponentFixture<EmpleadoAgregarEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoAgregarEditarComponent]
    });
    fixture = TestBed.createComponent(EmpleadoAgregarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
