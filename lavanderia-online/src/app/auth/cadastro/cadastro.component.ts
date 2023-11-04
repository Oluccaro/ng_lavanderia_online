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
  public endereco: Endereco = new Endereco();
  public usuario: Usuario = new Usuario();
  public senhaValida!: boolean;
  public message!: string;
  constructor(private cadastroService: CadastroService,
              private route: ActivatedRoute
              ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => this.message = param["error"])
  }
  
  public buscaEndereco(cep: string): Endereco {
    this.cadastroService.buscaViaCep(cep).subscribe({
      next: (data: Endereco) =>{
        if (data == null){
          this.endereco = new Endereco();
        }
        else {
          console.log(data);
          
          this.endereco = data;
        }
      }
    });

    return  this.endereco;
  }

  public validaSenha(senha: string, confirmaSenha: string): void{
    this.senhaValida = this.cadastroService.validaSenha(senha, confirmaSenha);
  }
}
