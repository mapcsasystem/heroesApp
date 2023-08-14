import { Component, Input, OnInit, inject } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss'],
})
export class HeroPageComponent implements OnInit {
  private readonly _heroesService = inject(HeroesService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  @Input() hero?: IHero;

  ngOnInit(): void {
    if (this.hero) {
      return;
    }
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
