import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userForm: FormGroup;

  constructor(public form: FormBuilder, public navCtrl: NavController) {
    this.userForm = this.form.group({
      nome: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  save(){
    let { nome, email } = this.userForm.value;
    let addUsuario = new UsuarioModel(1, nome, email);
    console.log(addUsuario);
  }

}
