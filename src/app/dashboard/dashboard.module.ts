import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import LocaleEs from '@angular/common/locales/es-MX';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';
import { HeroAddPageComponent } from './pages/hero-add-page/hero-add-page.component';
import { HeroSearchPageComponent } from './pages/hero-search-page/hero-search-page.component';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(LocaleEs, 'es-MX');

@NgModule({
  declarations: [
    DashboardComponent,
    HeroPageComponent,
    HeroesListPageComponent,
    HeroAddPageComponent,
    HeroSearchPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
    { provide: LOCALE_ID, useValue: 'es-MX' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'MXN' },
  ],
})
export class DashboardModule {}
