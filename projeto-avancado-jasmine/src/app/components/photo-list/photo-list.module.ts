import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoboardModule } from '../../shared/components/photoboard/photoboard.module';


@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule,
    PhotoboardModule
  ],
  exports: [PhotoListComponent]
})
export class PhotoListModule {
}
