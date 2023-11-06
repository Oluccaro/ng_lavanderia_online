import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  pedidos: Pedido[] = [];
  constructor(private pedidoService: PedidoService) {}
  ngOnInit(): void {
      this.pedidos = [];
      this.listarTodos();
  }

  listarTodos(): Pedido[] {
    this.pedidoService.listarTodos().subscribe({
      next: (data: Pedido[]) => {
        if (data == null) {
          this.pedidos = [];
        }
        else {
          this.pedidos = data;
        }
      }
    });

    return this.pedidos;
  }

}
