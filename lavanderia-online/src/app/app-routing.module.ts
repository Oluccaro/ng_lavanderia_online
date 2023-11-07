import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cliente/home/home.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { authGuard } from './auth';
import { PedidosComponent } from './cliente/pedidos';
import { ConsultarPedidoComponent } from './cliente/consultar-pedido';
import { NovoPedidoComponent } from './cliente/novo-pedido';

const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'cliente',
    redirectTo: 'cliente/home'
  },
  { path: 'cliente/home',
    component: HomeComponent,
    canActivate: [authGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path: 'cliente/pedidos',
    component: PedidosComponent,
    canActivate: [authGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path: 'cliente/consultar-pedido',
    component: ConsultarPedidoComponent,
    canActivate: [authGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path: 'cliente/novo-pedido',
    component: NovoPedidoComponent,
    canActivate: [authGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
