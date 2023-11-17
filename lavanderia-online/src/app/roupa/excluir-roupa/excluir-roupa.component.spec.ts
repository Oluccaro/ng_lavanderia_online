import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirRoupaComponent } from './excluir-roupa.component';

describe('ExcluirRoupaComponent', () => {
  let component: ExcluirRoupaComponent;
  let fixture: ComponentFixture<ExcluirRoupaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirRoupaComponent]
    });
    fixture = TestBed.createComponent(ExcluirRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
