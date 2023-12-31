import { CommonModule, registerLocaleData } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { HeroAddPageComponent } from './pages/hero-add-page/hero-add-page.component';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { HeroSearchPageComponent } from './pages/hero-search-page/hero-search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialModule } from '../material/material.module';
import LocaleEs from '@angular/common/locales/es-MX';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(LocaleEs, 'es-MX');

@NgModule({
  declarations: [
    DashboardComponent,
    HeroPageComponent,
    HeroesListPageComponent,
    HeroAddPageComponent,
    HeroSearchPageComponent,
    HeroCardComponent,
    HeroImagePipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
    { provide: LOCALE_ID, useValue: 'es-MX' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'MXN' },
  ],
})
export class DashboardModule {}
