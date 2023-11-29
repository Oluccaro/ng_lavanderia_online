import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmacao-func',
  templateUrl: './modal-confirmacao-func.component.html',
  styleUrls: ['./modal-confirmacao-func.component.css']
})
export class ModalConfirmacaoFuncComponent {
  @Input() pedido!: Pedido;

  constructor(
    public activeModal: NgbActiveModal,
    private pedidoService: PedidoService,
    private router: Router,
    route: ActivatedRoute
  ) {}

  ngOnInit(): void{
    
  }
  
  recolherPedido(pedido: Pedido): void {
    this.pedidoService.atualizarStatus('RECOLHIDO', pedido).subscribe(
      pedido => {
        this.activeModal.close();
      }
    );
  }

  lavarPedido(pedido: Pedido): void {
    this.pedidoService.atualizarStatus('AGUARDANDO PAGAMENTO', pedido).subscribe(
      pedido => {
        this.activeModal.close();
      }
    );
  }

  finalizarPedido(pedido: Pedido): void{
    this.pedidoService.atualizarStatus('FINALIZADO', pedido).subscribe(
      pedido => {
        this.activeModal.close();
      }
    );
  }


}
