import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaduserComponent } from './readuser.component';

describe('ReaduserComponent', () => {
  let component: ReaduserComponent;
  let fixture: ComponentFixture<ReaduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
