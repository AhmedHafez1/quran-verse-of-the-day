import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ayah, AyahResponse } from '../models/ayah.model';
@Injectable({
  providedIn: 'root',
})
export class QuranApiIntegrationService {
  apiUrl = 'http://api.alquran.cloud/v1/ayah/';
  constructor(private http: HttpClient) {}

  getAyah(ayahNumber: number): Observable<AyahResponse> {
    return this.http.get<AyahResponse>(`${this.apiUrl}${ayahNumber}`);
  }
}
