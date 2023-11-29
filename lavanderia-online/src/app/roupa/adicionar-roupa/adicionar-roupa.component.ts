import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalManutencaoRoupaComponent } from '../../modal/modal-manutencao-roupa/modal-manutencao-roupa.component';
import { Roupa } from '../../shared/models/roupa.model';
import { RoupaService } from '../services/roupa.service';

@Component({
  selector: 'app-adicionar-roupa',
  templateUrl: './adicionar-roupa.component.html',
  styleUrls: ['./adicionar-roupa.component.css'],
})
export class AdicionarRoupaComponent {
  roupa: Roupa;
  constructor(
    private roupaService: RoupaService,
    private modalService: NgbModal
  ) {}

  abrirModalManutencaoRoupa() {
    const modalRef = this.modalService.open(ModalManutencaoRoupaComponent);
  }
}
