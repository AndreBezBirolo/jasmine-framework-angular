import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoboardModule } from '../../shared/components/photoboard/photoboard.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule,
    PhotoboardModule,
    FontAwesomeModule
  ],
  exports: [PhotoListComponent]
})
export class PhotoListModule {
}
