import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrcamentoComponent } from './modal-orcamento.component';

describe('ModalOrcamentoComponent', () => {
  let component: ModalOrcamentoComponent;
  let fixture: ComponentFixture<ModalOrcamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalOrcamentoComponent]
    });
    fixture = TestBed.createComponent(ModalOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
