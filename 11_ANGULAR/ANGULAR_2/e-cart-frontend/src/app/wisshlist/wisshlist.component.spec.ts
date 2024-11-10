import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WisshlistComponent } from './wisshlist.component';

describe('WisshlistComponent', () => {
  let component: WisshlistComponent;
  let fixture: ComponentFixture<WisshlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WisshlistComponent]
    });
    fixture = TestBed.createComponent(WisshlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
