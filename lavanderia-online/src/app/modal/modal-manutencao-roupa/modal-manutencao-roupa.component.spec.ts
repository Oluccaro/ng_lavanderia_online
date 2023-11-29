import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalManutencaoRoupaComponent } from './modal-manutencao-roupa.component';

describe('ModalManutencaoRoupaComponent', () => {
  let component: ModalManutencaoRoupaComponent;
  let fixture: ComponentFixture<ModalManutencaoRoupaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalManutencaoRoupaComponent]
    });
    fixture = TestBed.createComponent(ModalManutencaoRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
