import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [MaterialModule],
  exports: [NotFoundPageComponent],
})
export class SharedModule {}
