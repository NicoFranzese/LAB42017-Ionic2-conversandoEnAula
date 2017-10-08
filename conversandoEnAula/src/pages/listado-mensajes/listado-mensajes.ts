import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MensajeProvider } from '../../providers/mensaje/mensaje';

import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the ListadoMensajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado-mensajes',
  templateUrl: 'listado-mensajes.html',
})
export class ListadoMensajesPage {
  public usuario;
  public mensaje;
  public aula;
  public arrMensajes;
  private loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public servicioMensaje: MensajeProvider,
    private loadingCtrl: LoadingController) {

    this.createLoading("Cargando mensajes...");
    this.aula = localStorage.getItem("aula")
    this.traerMensajes(this.aula);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ListadoMensajesPage');
  }

  private traerMensajes(aula) {
    this.servicioMensaje.getCurso(aula).subscribe(
      data => {
        this.arrMensajes = data;
        console.log(this.arrMensajes.length);

        this.loading.dismiss();
      },
      err => console.error(err),
      () => console.log(this.arrMensajes)
    );

    this.usuario = localStorage.getItem("usuario");
  }


  EnviarMensaje(men) {
    if ((men == "") || (men == undefined) || (men == null)) {
      alert("Debe ingresar un mensaje");
    } else {
      this.servicioMensaje.postMensaje(this.aula, localStorage.getItem("usuario"), men);
      this.mensaje = "";
    }
  }

  private logout() {
    localStorage.removeItem("usuario");
    this.navCtrl.push(LoginPage);
  }

  private createLoading(message: string) {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box mt-2">
        <img src="./assets/img/logo2.png" width="80">
        </div>
      </div>` + message
    });
    this.loading.present();
  }

}
