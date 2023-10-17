import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseOfTheDayComponent } from './verse-of-the-day.component';

describe('VerseOfTheDayComponent', () => {
  let component: VerseOfTheDayComponent;
  let fixture: ComponentFixture<VerseOfTheDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerseOfTheDayComponent]
    });
    fixture = TestBed.createComponent(VerseOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
