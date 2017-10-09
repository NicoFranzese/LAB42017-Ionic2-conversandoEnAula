import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ListadoMensajesPage } from '../listado-mensajes/listado-mensajes';

/**
 * Generated class for the SeleccionAulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccion-aula',
  templateUrl: 'seleccion-aula.html',
})
export class SeleccionAulaPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SeleccionAulaPage');
  }

  SeleccionAula(aula){
    if ((aula == "") || (aula == undefined) || (aula == null)) {
      this.presentToast("Debe seleccionar aula"); 
    } else {
      localStorage.setItem("aula",aula);
      this.navCtrl.push(ListadoMensajesPage);
    }

  }
  private presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
