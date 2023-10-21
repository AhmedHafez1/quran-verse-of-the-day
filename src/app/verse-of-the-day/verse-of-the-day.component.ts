import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Ayah } from '../models/ayah.model';
import { VerseOfTheDayService } from '../services/verse-of-the-day.service';

@Component({
  selector: 'app-verse-of-the-day',
  templateUrl: './verse-of-the-day.component.html',
  styleUrls: ['./verse-of-the-day.component.scss'],
})
export class VerseOfTheDayComponent {
  ayah$: Observable<Ayah> = this.verseOfTheDayService.getAyahOfTheDay();

  constructor(private verseOfTheDayService: VerseOfTheDayService) {}
}
