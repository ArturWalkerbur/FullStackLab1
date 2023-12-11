import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent2 } from './navbar2.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent2;
  let fixture: ComponentFixture<NavbarComponent2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent2]
    });
    fixture = TestBed.createComponent(NavbarComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
