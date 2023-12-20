import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private cocktailsUrl = '../assets/cocktails.json';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.cocktailsUrl);
  }
}