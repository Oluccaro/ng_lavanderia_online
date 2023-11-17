import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarRoupaComponent } from './atualizar-roupa.component';

describe('AtualizarRoupaComponent', () => {
  let component: AtualizarRoupaComponent;
  let fixture: ComponentFixture<AtualizarRoupaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarRoupaComponent]
    });
    fixture = TestBed.createComponent(AtualizarRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
