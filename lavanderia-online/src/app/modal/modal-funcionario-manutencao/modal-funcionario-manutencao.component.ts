import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FuncionarioService } from 'src/app/funcionario/services/funcionario.service';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';

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
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  goFuncionarios() {
    this.router.navigate(['/funcionario/manutencao']);
  }

  public salvarFuncionario(): void {
    if (this.formFunc.form.valid) {
      if (this.novoFuncionario.id) {
        // Se o funcionário já tem um ID, então é uma operação de edição
        this.funcionarioService
          .atualizarFuncionario(this.novoFuncionario)
          .subscribe(
            (funcionario) => {
              console.log('Funcionário atualizado com sucesso:', funcionario);
              this.activeModal.close();
              this.goFuncionarios();
            },
            (error) => {
              console.error('Falha ao atualizar o funcionário!', error);
              this.errorMessage =
                'Falha ao atualizar o funcionário. Por favor, tente novamente.';
            }
          );
      } else {
        // Se não tiver um ID, então é uma operação de adição
        this.funcionarioService
          .adicionarFuncionario(this.novoFuncionario)
          .subscribe(
            (funcionario) => {
              console.log('Funcionário salvo com sucesso:', funcionario);
              this.activeModal.close();
              this.goFuncionarios();
            },
            (error) => {
              console.error('Falha ao salvar o funcionário!', error);
              this.errorMessage =
                'Falha ao salvar o funcionário. Por favor, tente novamente.';
            }
          );
      }
    }
  }
}
