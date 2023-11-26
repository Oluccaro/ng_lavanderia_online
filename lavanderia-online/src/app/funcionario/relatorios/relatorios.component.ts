import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Usuario } from 'src/app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {
  private _usuario: Usuario;
  clientes: Usuario[] = [];  
  dataInicial: Date = new Date();
  dataFinal: Date = new Date();
  
  datepickerConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-default',
    dateInputFormat: 'DD/MM/YYYY',
  };

  constructor(
    private loginService: LoginService,
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private router: Router
  ) {
    this._usuario = loginService.usuarioLogado;
  }

  ngOnInit(): void {
    this.listarTodos();
  }

  public get usuario(): Usuario {
    return this._usuario;
  }

  public set usuario(value: Usuario) {
    this._usuario = value;
  }

  public listarTodos() {
    this.clienteService.listarTodos().subscribe({
      next: (data: Usuario[]) => {
        if (data == null) {
          this.clientes = [];
        } else {
          this.clientes = data.filter(usuario => usuario.perfil === 'CLIENTE');
        }
      },
      error: (error) => {
        console.error('Erro ao listar clientes', error);
      }
    });
  }

  public gerarReceitaPDF() {
    const pdf = new jsPDF();
    pdf.text('Conteúdo do Relatório', 10, 10);
    pdf.save('relatorio.pdf');
  }

  public gerarClientePDF() {
    const pdf = new jsPDF({
      orientation: 'landscape',
    });
  
    const title = 'Relatório de Clientes';
    const titleFontSize = pdf.getFontSize(); // Obter o tamanho da fonte do PDF
    const titleWidth = pdf.getStringUnitWidth(title) * titleFontSize / pdf.internal.scaleFactor;
    const x = (pdf.internal.pageSize.width - titleWidth) / 2;
  
    pdf.text(title, x, 10);
  
    if (this.clientes.length > 0) {
      const data = this.clientes.map(cliente => [
        cliente.cpf || '',        
        cliente.nome || '',
        cliente.email || '',
        cliente.telefone || '',
        (
          (cliente.endereco?.logradouro || '') + ', ' +
          (cliente.endereco?.numero || '') + ' - ' +
          (cliente.endereco?.bairro || '')
        ),
        (
          (cliente.endereco?.localidade || '') + '/' +
          (cliente.endereco?.uf || '')
        )
      ]);
      const headers = ['CPF', 'Nome', 'Email', 'Telefone', 'Endereco', 'Cidade/UF'];
  
      autoTable(pdf, { head: [headers], body: data, startY: 20 });
    } else {
      pdf.text('Nenhum cliente encontrado.', 10, 30);
    }
  
    pdf.save('relatorio-clientes.pdf');
  }  

  public gerarClienteFielPDF() {
    const pdf = new jsPDF();
    pdf.text('Conteúdo do Relatório', 10, 10);
    pdf.save('relatorio.pdf');
  }
}