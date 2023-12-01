import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Roupa } from '../../shared/models/roupa.model';
import { RoupaService } from '../../roupa/services/roupa.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-manutencao-roupa',
  templateUrl: './modal-manutencao-roupa.component.html',
  styleUrls: ['./modal-manutencao-roupa.component.css'],
})
export class ModalManutencaoRoupaComponent implements OnInit {
  @ViewChild('formRoupa') formRoupa!: NgForm;
  roupa!: Roupa;
  novaRoupa: Roupa = new Roupa;
  @Input() editarRoupa!: Roupa;

  constructor(
    public activeModal: NgbActiveModal,
    private roupaService: RoupaService
  ) {}

  ngOnInit(): void {
    this.roupa = this.editarRoupa || this.novaRoupa;
  }

  goRoupas() {
    this.router.navigate(['/funcionario/roupas']);
  };

  public salvarRoupa(): boolean {
    if (this.formRoupa.form.valid) {
      this.roupaService.gerarRoupa(this.roupa).subscribe((roupa) => {
        if (roupa !== null) {
          console.log('Roupa salva com sucesso:', this.roupa);
          this.activeModal.close();
          this.goRoupas();
        }
      });
      return true;
    }
    console.log('Falha ao salvar!', this.roupa);
    return false;
  }
}
