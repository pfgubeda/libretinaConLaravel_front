import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibretinasComponent } from './libretinas.component';

describe('LibretinasComponent', () => {
  let component: LibretinasComponent;
  let fixture: ComponentFixture<LibretinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibretinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibretinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
