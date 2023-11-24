import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { RoupaService } from 'src/app/roupa/services/roupa.service';
import { Usuario } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoComponent } from 'src/app/modal/modal-confirmacao';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})

export class NovoPedidoComponent implements OnInit{
  private _usuario!: Usuario;
  roupas: Roupa[] = [];

  constructor(
    private loginService: LoginService,
    private roupaService: RoupaService,
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
    this.roupas = [];
    this.listarRoupas();
    this.usuario = this.loginService.usuarioLogado;
  }

  public listarRoupas(): Roupa[] {
    this.roupaService.listarRoupas().subscribe({
      next: (data: Roupa[]) => {
        if (data == null) {
          this.roupas = [];
        }
        else {
          this.roupas = data;
        }
      }
    });
    return this.roupas;
  }
}
