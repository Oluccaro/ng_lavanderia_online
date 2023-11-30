import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  @ViewChild('formFuncionario') formFuncionario!: NgForm;
  @Input() novoFuncionario!: Funcionario;
  public funcionario: Funcionario = new Funcionario();

  datepickerConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-default',
    dateInputFormat: 'DD/MM/YYYY',
  };
  constructor(
    public activeModal: NgbActiveModal,
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public salvarFuncionario(): boolean {
    if (this.formFuncionario.form.valid) {
      this.funcionarioService
        .adicionarFuncionario(this.funcionario)
        .subscribe((funcionario) => {
          if (funcionario != null) {
            console.log('Funcionario salvo com sucesso:', this.novoFuncionario);
            this.activeModal.close();
            this.funcionarioService.listarFuncionarios();
          }
        });

      return true;
    } else {
      return false;
    }
  }
}
