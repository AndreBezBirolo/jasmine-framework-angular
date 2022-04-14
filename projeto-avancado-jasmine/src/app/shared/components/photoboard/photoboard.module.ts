import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoboardComponent } from './photoboard.component';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';


@NgModule({
  declarations: [PhotoboardComponent],
  imports: [
    CommonModule,
    PhotoFrameModule
  ],
  exports: [
    PhotoboardComponent
  ]
})
export class PhotoboardModule {
}
