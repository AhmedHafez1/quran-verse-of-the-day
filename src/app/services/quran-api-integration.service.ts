import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ayah, AyahResponse } from '../models/ayah.model';
@Injectable({
  providedIn: 'root',
})
export class QuranApiIntegrationService {
  ayahUrl = 'https://api.alquran.cloud/v1/ayah/';
  editions = '/editions/quran-uthmani,en.asad,en.pickthall';
  constructor(private http: HttpClient) {}

  getAyah(ayahNumber: number): Observable<AyahResponse> {
    return this.http.get<AyahResponse>(
      `${this.ayahUrl}${ayahNumber}${this.editions}`
    );
  }
}
