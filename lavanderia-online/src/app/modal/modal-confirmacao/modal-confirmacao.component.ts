import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.css']
})
export class ModalConfirmacaoComponent {
  @Input() pedido!: Pedido;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void{

  }
}
