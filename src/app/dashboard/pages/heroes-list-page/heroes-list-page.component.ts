import { AfterViewInit, Component, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { IHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes-list-page',
  templateUrl: './heroes-list-page.component.html',
  styleUrls: ['./heroes-list-page.component.scss'],
})
export class HeroesListPageComponent implements AfterViewInit {
  private readonly _heroesSercice = inject(HeroesService);

  heroes: IHero[] = [];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._heroesSercice.getHeroes().subscribe((heroes) => {
        this.heroes = heroes;
      });
    }, 3000);
  }
}
