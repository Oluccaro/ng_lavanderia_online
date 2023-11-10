import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  pedidos: Pedido[] = [];
  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
      this.pedidos = [];
      this.listarAbertos();
  }

  listarAbertos(): Pedido[] {
    this.pedidoService.listarAbertos().subscribe({
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

  goPedidos() {
    this.router.navigate(['./pedidos']);
  };
}
