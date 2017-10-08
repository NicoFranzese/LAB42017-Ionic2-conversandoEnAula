import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeleccionAulaPage } from './seleccion-aula';

@NgModule({
  declarations: [
    SeleccionAulaPage,
  ],
  imports: [
    IonicPageModule.forChild(SeleccionAulaPage),
  ],
})
export class SeleccionAulaPageModule {}
