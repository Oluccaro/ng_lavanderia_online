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
export class ModalManutencaoRoupaComponent implements OnInit {
  @ViewChild('formRoupa') formRoupa!: NgForm;
  @Input() novaRoupa = Roupa;
  public roupa: Roupa = new Roupa();

  constructor(
    public activeModal: NgbActiveModal,
    private roupaService: RoupaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public salvarRoupa(): boolean {
    if (this.formRoupa.form.valid) {
      this.roupaService.gerarRoupa(this.roupa).subscribe((roupa) => {
        if (roupa != null) {
          console.log('Roupa salva com sucesso:', this.novaRoupa);
          this.activeModal.close();
          this.roupaService.listarRoupas();
        }
      });
      return true;
    }
    return false;
  }
}
