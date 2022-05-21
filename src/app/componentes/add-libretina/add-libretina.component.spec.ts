import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibretinaComponent } from './add-libretina.component';

describe('AddLibretinaComponent', () => {
  let component: AddLibretinaComponent;
  let fixture: ComponentFixture<AddLibretinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLibretinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLibretinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
