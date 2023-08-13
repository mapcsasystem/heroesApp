import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, of } from 'rxjs';
import { IHero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = environment.apiUrl;

  getHeroes(): Observable<IHero[]> {
    const url = `${this._apiUrl}/heroes`;
    return this._http.get<IHero[]>(`${url}`).pipe(catchError(() => of([])));
  }

  getHero(id: string): Observable<IHero | null> {
    const url = `${this._apiUrl}/heroes/${id}`;
    return this._http.get<IHero>(`${url}`).pipe(catchError(() => of(null)));
  }
}
