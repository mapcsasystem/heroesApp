import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroAddPageComponent } from './pages/hero-add-page/hero-add-page.component';
import { HeroSearchPageComponent } from './pages/hero-search-page/hero-search-page.component';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { NotFoundPageComponent } from '../shared/pages/not-found-page/not-found-page.component';

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
        path: 'edit-hero/:id',
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
        path: '404',
        component: NotFoundPageComponent,
      },
      {
        path: '**',
        redirectTo: '404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
