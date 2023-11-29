import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFuncionarioManutencaoComponent } from './modal-funcionario-manutencao.component';

describe('ModalFuncionarioManutencaoComponent', () => {
  let component: ModalFuncionarioManutencaoComponent;
  let fixture: ComponentFixture<ModalFuncionarioManutencaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFuncionarioManutencaoComponent]
    });
    fixture = TestBed.createComponent(ModalFuncionarioManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
