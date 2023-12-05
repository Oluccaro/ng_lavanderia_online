import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/shared';
import { LoginService } from 'src/app/auth';

@Component({
  selector: 'app-modal-orcamento',
  templateUrl: './modal-orcamento.component.html',
  styleUrls: ['./modal-orcamento.component.css']
})
export class ModalOrcamentoComponent {
  private _usuario: Usuario;
  @Input() roupas: Roupa[] = [];
  @Input() pedido!: Pedido;

  constructor(
    public activeModal: NgbActiveModal,
    private loginService: LoginService,
    private pedidoService: PedidoService,
    private router: Router,
  ) {
    this._usuario = loginService.usuarioLogado;
  }

  ngOnInit(): void{
    this.pedido.idCliente = this._usuario.id;
  }

  goPedidos() {
    this.router.navigate(['/cliente/pedidos']);
  };

  aprovarOrcamento(pedido: Pedido): void {
    this.pedido.status = "EM ABERTO";
    this.pedidoService.gerarPedido(pedido).subscribe(
      pedido => {
        this.activeModal.close();
      }
    );
  }

  rejeitarOrcamento(pedido: Pedido): void {
    this.pedido.status = "REJEITADO";
    this.pedidoService.gerarPedido(pedido).subscribe(
      pedido => {
        this.activeModal.close();
      }
    );
  }
}