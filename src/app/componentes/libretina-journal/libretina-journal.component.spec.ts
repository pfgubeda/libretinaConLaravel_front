import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibretinaJournalComponent } from './libretina-journal.component';

describe('LibretinaJournalComponent', () => {
  let component: LibretinaJournalComponent;
  let fixture: ComponentFixture<LibretinaJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibretinaJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibretinaJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
