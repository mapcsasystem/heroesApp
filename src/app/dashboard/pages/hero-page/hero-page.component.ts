import { AfterViewInit, Component, inject } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss'],
})
export class HeroPageComponent implements AfterViewInit {
  private readonly _heroesService = inject(HeroesService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  hero?: IHero;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._activatedRoute.params
        .pipe(switchMap(({ id }) => this._heroesService.getHeroById(id)))
        .subscribe((hero) => {
          if (!hero) {
            this._router.navigateByUrl('dashboard', { replaceUrl: true });
          } else {
            this.hero = hero;
          }
        });
    }, 500);
  }
}
