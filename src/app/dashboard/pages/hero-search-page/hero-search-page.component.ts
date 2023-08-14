import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IHero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-hero-search-page',
  templateUrl: './hero-search-page.component.html',
  styleUrls: ['./hero-search-page.component.scss'],
})
export class HeroSearchPageComponent {
  private readonly _heroesService = inject(HeroesService);
  searchInput = new FormControl('');
  heroes: IHero[] = [];
  selectedHero?: IHero;
  // ngOnInit() {
  //    this.searchInput.valueChanges.pipe().subscribe((value) => {
  //      console.log(value);
  //    });
  // }

  searchHero(): void {
    const value: string = this.searchInput.value || '';
    this._heroesService.getSuggestions(value).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: IHero = event.option.value as IHero;
    this.searchInput.setValue(hero.superhero);
    this._heroesService.getHeroById(hero.id).subscribe((hero) => {
      this.selectedHero = hero;
    });
  }
}
