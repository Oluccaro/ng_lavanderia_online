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
    this.pedidoService.cancelarPedido(pedido).subscribe(
      pedido => {
        this.router.navigate( ["/cliente"]);
      }
    );
  }
}
