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
  @Input() novaRoupa: Roupa = new Roupa();

  constructor(
    public activeModal: NgbActiveModal,
    private roupaService: RoupaService
  ) {}

  ngOnInit(): void {}

  public salvarRoupa(): boolean {
    if (this.formRoupa.form.valid) {
      this.roupaService.gerarRoupa(this.novaRoupa).subscribe((roupa) => {
        if (roupa != null) {
          console.log('Roupa salva com sucesso:', roupa);
          this.activeModal.close();
          this.roupaService.listarRoupas();
        }
      });
      return true;
    }
    console.log('Falha ao salvar!', this.novaRoupa);
    return false;
  }
}
