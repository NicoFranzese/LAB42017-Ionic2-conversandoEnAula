import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoMensajesPage } from './listado-mensajes';

@NgModule({
  declarations: [
    ListadoMensajesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoMensajesPage),
  ],
})
export class ListadoMensajesPageModule {}
