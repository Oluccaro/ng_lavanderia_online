import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { RoupaService } from 'src/app/roupa/services/roupa.service';
import { Usuario } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOrcamentoComponent } from 'src/app/modal/modal-orcamento';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css'],
})
export class NovoPedidoComponent implements OnInit {
  pedido: Pedido = new Pedido();
  private _usuario!: Usuario;
  roupas: Roupa[] = [];
  valorPedido: number = 0;
  roupasComQuantidade = this.roupas.filter(
    (roupa) => roupa.quantidade && roupa.quantidade !== 0
  );

  constructor(
    private loginService: LoginService,
    private roupaService: RoupaService,
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
        } else {
          this.roupas = data;
        }
      },
    });
    return this.roupas;
  }

  abrirModal(): Boolean {
    const roupasComQuantidade = this.roupas.filter(
      (roupa) => roupa.quantidade && roupa.quantidade !== 0
    );
    if (roupasComQuantidade.length > 0) {
      const maiorPrazo = '12/08/2023';
      const valorTotal = roupasComQuantidade.reduce((total, roupa) => {
        return total + (roupa.quantidade || 0) * roupa.preco;
      }, 0);
      const modalRef = this.modalService.open(ModalOrcamentoComponent);
      this.pedido.setRoupas = roupasComQuantidade;
      this.pedido.setDataPrevista = maiorPrazo;
      this.pedido.setValor = valorTotal;
      modalRef.componentInstance.pedido = this.pedido;
      modalRef.componentInstance.roupas = roupasComQuantidade;
      return true;
    } else {
      return false;
    }
  }
}
