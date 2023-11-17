import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarRoupaComponent } from './adicionar-roupa.component';

describe('AdicionarRoupaComponent', () => {
  let component: AdicionarRoupaComponent;
  let fixture: ComponentFixture<AdicionarRoupaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarRoupaComponent]
    });
    fixture = TestBed.createComponent(AdicionarRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
