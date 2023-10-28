import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente, Endereco, Usuario } from 'src/app/shared';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../services';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @ViewChild('cadastroForm') cadastroForm!: NgForm;
  public cliente!: Cliente;
  public endereco!: Endereco;
  public usuario!: Usuario;
  public message!: string;
  constructor(private cadastroService: CadastroService,
              private route: ActivatedRoute
              ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => this.message = param["error"])
  }
  
  public buscaEndereco(cep: string): Endereco {
    this.endereco = CadastroService.buscaCepViaWS(cep);
    return  this.endereco;
  }
}
