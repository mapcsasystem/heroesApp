import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import LocaleEs from '@angular/common/locales/es-MX';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HomeComponent } from './pages/home/home.component';
registerLocaleData(LocaleEs, 'es-MX');

@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
    { provide: LOCALE_ID, useValue: 'es-MX' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'MXN' },
  ],
})
export class DashboardModule {}
