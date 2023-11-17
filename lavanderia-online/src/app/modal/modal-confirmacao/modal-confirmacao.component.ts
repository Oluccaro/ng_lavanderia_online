import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.css']
})
export class ModalConfirmacaoComponent {
  @Input() pedido!: Pedido;

  constructor(
    public activeModal: NgbActiveModal,
    private pedidoService: PedidoService,
    private router: Router,
    route: ActivatedRoute
  ) {}

  ngOnInit(): void{
    
  }

  cancelarPedido(pedido: Pedido): void {
    this.pedidoService.atualizarStatus('CANCELADO', pedido).subscribe(
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

  pagarPedido(pedido: Pedido): void{
    this.router.navigate(["/cliente/pagar"]);
    this.activeModal.close();
  }
}
