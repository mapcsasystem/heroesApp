import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { IMenuItems } from './interfaces/menu.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private readonly _breakpointObserver = inject(BreakpointObserver);
  private readonly _authService = inject(AuthService);
  isHandset$: Observable<boolean> = this._breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  menuItems: IMenuItems[] = [
    {
      label: 'Listado de héroes',
      icon: 'label',
      url: './heroes-list',
    },
    { label: 'Añadir héroe', icon: 'add', url: './hero-add' },
    { label: 'Buscar héroe', icon: 'search', url: './hero-search' },
  ];
  logout(): void {
    this._authService.logout();
  }
}
