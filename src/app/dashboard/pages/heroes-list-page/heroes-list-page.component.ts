import { Component, OnInit, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { IHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes-list-page',
  templateUrl: './heroes-list-page.component.html',
  styleUrls: ['./heroes-list-page.component.scss'],
})
export class HeroesListPageComponent implements OnInit {
  private readonly _heroesSercice = inject(HeroesService);

  heroes: IHero[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this._heroesSercice.getHeroes().subscribe((heroes) => {
        this.heroes = heroes;
      });
    }, 500);
  }
}
