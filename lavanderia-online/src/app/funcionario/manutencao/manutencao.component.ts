import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../auth';
import { FuncionarioService } from '../services/funcionario.service';
import { Usuario } from 'src/app/shared';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoComponent } from '../../modal/modal-confirmacao';
import { ModalFuncionarioManutencaoComponent } from 'src/app/modal/modal-funcionario-manutencao';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.css'],
})
export class ManutencaoComponent implements OnInit {
  private _usuario!: Usuario;
  funcionarios: Funcionario[] = [];

  constructor(
    private loginService: LoginService,
    private funcionarioService: FuncionarioService,
    private router: Router,
    route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  public get usuario(): Usuario {
    return this._usuario;
  }
  public set usuario(value: Usuario) {
    this._usuario = value;
  }

  ngOnInit(): void {
    this.funcionarios = [];
    this.listarFuncionarios();
    this.usuario = this.loginService.usuarioLogado;
  }

  public listarFuncionarios(): Funcionario[] {
    this.funcionarioService.listarFuncionarios().subscribe((funcionarios) => {
      this.funcionarios = funcionarios;
    });
    return this.funcionarios;
  }

  public abrirModal() {
    const modalRef = this.modalService.open(
      ModalFuncionarioManutencaoComponent
    );
  }

  public abrirModalEdicao(funcionario: Funcionario): void {
    const modalRef = this.modalService.open(
      ModalFuncionarioManutencaoComponent
    );
    modalRef.componentInstance.novoFuncionario = funcionario;
    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((reason) => {
        // O que fazer quando o modal é demitido (dismissed)
        console.log(reason);
      });
  }

  public remover(event: Event, funcionario: Funcionario): void {
    event.preventDefault();
    if (
      confirm(`Deseja realmente remover o funcionário ${funcionario.nome}?`)
    ) {
      this.funcionarioService.excluirFuncionario(funcionario.id!);
      this.listarFuncionarios();
    }
  }
}
