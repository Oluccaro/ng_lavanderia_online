import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentFuncComponent } from './home-func.component';

describe('HomeComponentFuncComponent', () => {
  let component: HomeComponentFuncComponent;
  let fixture: ComponentFixture<HomeComponentFuncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponentFuncComponent]
    });
    fixture = TestBed.createComponent(HomeComponentFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
