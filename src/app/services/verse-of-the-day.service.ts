import { Observable, map } from 'rxjs';
import { Ayah } from '../models/ayah.model';
import { QuranApiIntegrationService } from './quran-api-integration.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VerseOfTheDayService {
  constructor(private quranService: QuranApiIntegrationService) {}

  getAyahOfTheDay(): Observable<Ayah[]> {
    const ayahNumber = Math.floor(Math.random() * 6236) + 1;

    return this.quranService.getAyah(ayahNumber).pipe(map((ayah) => ayah.data));
  }
}
