import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [NotFoundPageComponent, LazyImageComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NotFoundPageComponent, LazyImageComponent],
})
export class SharedModule {}
