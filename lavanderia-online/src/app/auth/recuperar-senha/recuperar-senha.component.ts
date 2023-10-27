import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent {
  username: string = "";
  mensagemEnviada: boolean = false;

  submitForm(form: NgForm) {

    this.mensagemEnviada = true;
    
  }
}
