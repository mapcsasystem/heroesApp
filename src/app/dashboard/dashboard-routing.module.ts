import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroAddPageComponent } from './pages/hero-add-page/hero-add-page.component';
import { HeroSearchPageComponent } from './pages/hero-search-page/hero-search-page.component';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'hero-add',
        component: HeroAddPageComponent,
      },
      {
        path: 'hero-search',
        component: HeroSearchPageComponent,
      },
      {
        path: 'edit/:id',
        component: HeroAddPageComponent,
      },
      {
        path: 'heroes-list',
        component: HeroesListPageComponent,
      },
      {
        path: ':id',
        component: HeroPageComponent,
      },
      {
        path: '**',
        redirectTo: 'heroes-list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
