import { Component, Input } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent {
  @Input({ required: true }) hero!: IHero;
}
