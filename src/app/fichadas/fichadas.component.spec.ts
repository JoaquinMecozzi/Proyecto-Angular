import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichadasComponent } from './fichadas.component';

describe('FichadasComponent', () => {
  let component: FichadasComponent;
  let fixture: ComponentFixture<FichadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichadasComponent]
    });
    fixture = TestBed.createComponent(FichadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
