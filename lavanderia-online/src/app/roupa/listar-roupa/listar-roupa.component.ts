import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../auth';
import { RoupaService } from '../services/roupa.service';
import { Usuario } from '../../shared';
import { Roupa } from '../../shared/models/roupa.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoComponent } from '../../modal/modal-confirmacao';
import { ModalManutencaoRoupaComponent } from '../../modal/modal-manutencao-roupa/modal-manutencao-roupa.component';

@Component({
  selector: 'app-listar-roupa',
  templateUrl: './listar-roupa.component.html',
  styleUrls: ['./listar-roupa.component.css'],
})
export class ListarRoupaComponent implements OnInit {
  private _usuario!: Usuario;
  roupas: Roupa[] = [];
  roupa: Roupa = new Roupa;

  constructor(
    private loginService: LoginService,
    private roupaService: RoupaService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  public get usuario(): Usuario {
    return this._usuario;
  }
  public set usuario(value: Usuario) {
    this._usuario = value;
  }

  ngOnInit(): void {
    this.roupas = [];
    this.listarRoupas();
    this.usuario = this.loginService.usuarioLogado;
  }

  public listarRoupas() {
    return this.roupaService.listarRoupas().subscribe(roupas => {this.roupas = roupas;
    });
  }

  abrirModal(): void {
    const modalRef = this.modalService.open(ModalManutencaoRoupaComponent);
    modalRef.componentInstance.editarRoupa = this.roupa;
    modalRef.result.then(
      () => {
        this.router.navigate(['/funcionario/roupas']);
      },
      () => {
        this.router.navigate(['/funcionario/roupas']);
      }
    );
  }

  remover(event: Event, roupa: Roupa): void {
    event.preventDefault();
    if (confirm(`Deseja realmente remover a roupa ${roupa.descricao}?`)) {
     // this.roupaService.excluirRoupa(roupa.id_peca!);
      this.listarRoupas();
    }
  }
}
