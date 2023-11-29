import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Roupa } from '../../shared/models/roupa.model';
import { RoupaService } from '../../roupa/services/roupa.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-manutencao-roupa',
  templateUrl: './modal-manutencao-roupa.component.html',
  styleUrls: ['./modal-manutencao-roupa.component.css'],
})
export class ModalManutencaoRoupaComponent {
  @ViewChild('formRoupa') formRoupa!: NgForm;
  @Input() roupa!: Roupa;
  constructor(
    public activeModal: NgbActiveModal,
    private roupaService: RoupaService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  salvarRoupa(): void {
    if (this.formRoupa.form.valid) {
      this.roupaService.adicionarRoupa(this.roupa).subscribe(
        (novaRoupa) => {
          console.log('Roupa salva com sucesso:', novaRoupa);
          this.activeModal.close();
        },
        (erro) => {
          console.error('Erro ao salvar a roupa:', erro);
        }
      );
    } else {
      console.warn('Roupa não está definida para salvar.');
    }
  }
}
