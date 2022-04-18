import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoboardComponent } from './photoboard.component';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoboardService } from './services/photoboard.service';


@NgModule({
  declarations: [PhotoboardComponent],
  imports: [
    CommonModule,
    PhotoFrameModule
  ],
  exports: [
    PhotoboardComponent
  ],
  providers: [
    PhotoboardService
  ]
})
export class PhotoboardModule {
}
