import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FuncionarioService } from 'src/app/funcionario/services/funcionario.service';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-modal-funcionario-manutencao',
  templateUrl: './modal-funcionario-manutencao.component.html',
  styleUrls: ['./modal-funcionario-manutencao.component.css'],
})
export class ModalFuncionarioManutencaoComponent implements OnInit {
  @ViewChild('formFunc') formFunc!: NgForm;
  @Input() novoFuncionario: Funcionario = new Funcionario();
  public errorMessage: string = '';

  datepickerConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-default',
    dateInputFormat: 'DD/MM/YYYY',
  };

  constructor(
    public activeModal: NgbActiveModal,
    private funcionarioService: FuncionarioService
  ) {}

  ngOnInit(): void {}

  public salvarFuncionario(): void {
    if (this.formFunc.form.valid) {
      this.funcionarioService
        .adicionarFuncionario(this.novoFuncionario)
        .subscribe(
          (funcionario) => {
            console.log('Funcionario salvo com sucesso:', funcionario);
            this.activeModal.close();
            this.funcionarioService.listarFuncionarios();
          },
          (error) => {
            console.error('Falha ao salvar!', error);
            this.errorMessage =
              'Falha ao salvar o funcionário. Por favor, tente novamente.';
          }
        );
    }
  }
}
