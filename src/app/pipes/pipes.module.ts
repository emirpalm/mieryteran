import { PdfPipe } from './pdf.pipe';
import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  imports: [],
  declarations: [
    ImagenPipe,
    PdfPipe
  ],
  exports: [
    ImagenPipe,
    PdfPipe
  ]
})
export class PipesModule { }
