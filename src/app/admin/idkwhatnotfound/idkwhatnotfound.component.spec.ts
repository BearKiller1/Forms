import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdkwhatnotfoundComponent } from './idkwhatnotfound.component';

describe('IdkwhatnotfoundComponent', () => {
  let component: IdkwhatnotfoundComponent;
  let fixture: ComponentFixture<IdkwhatnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdkwhatnotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdkwhatnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
