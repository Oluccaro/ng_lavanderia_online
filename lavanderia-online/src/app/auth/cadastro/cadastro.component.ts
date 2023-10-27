import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente, Endereco, Usuario } from 'src/app/shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from '../services';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  constructor(cadastroService: CadastroService) {
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(param => this.message = param["error"])
  }

  @ViewChild('cadastroForm') cadastroForm!: NgForm;
  public cliente!: Cliente;
  public endereco!: Endereco;
  public usuario!: Usuario;
  
  public buscaEndereco(cep: string): Endereco {
    CadastroService.buscaCepViaWS(cep);
    const endereco = new Endereco(cep);
    return  endereco;
  }
}
