import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Ayah } from '../models/ayah.model';
import { VerseOfTheDayService } from '../services/verse-of-the-day.service';

const NUMBER_OF_IMAGES = 5;
@Component({
  selector: 'app-verse-of-the-day',
  templateUrl: './verse-of-the-day.component.html',
  styleUrls: ['./verse-of-the-day.component.scss'],
})
export class VerseOfTheDayComponent {
  ayah$: Observable<Ayah> = this.verseOfTheDayService
    .getAyahOfTheDay()
    .pipe(map((ayahEditions) => ayahEditions[0]));
  ayahTranslation$: Observable<Ayah[]> = this.verseOfTheDayService
    .getAyahOfTheDay()
    .pipe(map((ayahEditions) => ayahEditions.splice(0, 1)));

  img = Math.floor(Math.random() * NUMBER_OF_IMAGES) + 1;

  constructor(private verseOfTheDayService: VerseOfTheDayService) {}
}
