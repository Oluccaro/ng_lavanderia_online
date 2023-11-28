import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacaoFuncComponent } from './modal-confirmacao-func.component';

describe('ModalConfirmacaoFuncComponent', () => {
  let component: ModalConfirmacaoFuncComponent;
  let fixture: ComponentFixture<ModalConfirmacaoFuncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmacaoFuncComponent]
    });
    fixture = TestBed.createComponent(ModalConfirmacaoFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
