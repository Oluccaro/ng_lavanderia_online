import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cliente/home/home.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { authGuard } from './auth';
import { ConsultarPedidoComponent } from './cliente/consultar-pedido';
import { NovoPedidoComponent } from './cliente/novo-pedido';
import { HomeFuncComponent } from './funcionario/home-func';
import { RelatoriosComponent } from './funcionario/relatorios';
import { ListarPedidosComponent } from './cliente/listar-pedidos';
import { ListagemComponent } from './funcionario/listagem';
import { ListarRoupaComponent } from './roupa/listar-roupa/listar-roupa.component';

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
    component: ListarPedidosComponent,
    canActivate: [authGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path: 'cliente/consulta',
    component: ConsultarPedidoComponent,
    canActivate: [authGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path: 'cliente/novo',
    component: NovoPedidoComponent,
    canActivate: [authGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path:'funcionario',
    redirectTo: 'funcionario/home' 
  },
  { path: 'funcionario/home',
    component: HomeFuncComponent,
    canActivate: [authGuard],
    data: {
      role: 'FUNC'
    }
  },
  { path: 'funcionario/listagem',
    component: ListagemComponent,
    canActivate: [authGuard],
    data: {
      role: 'FUNC'
    }
  },
  { path: 'funcionario/relatorios',
    component: RelatoriosComponent,
    canActivate: [authGuard],
    data: {
      role: 'FUNC'
    }
  },
  { path: 'funcionario/roupas',
    component: ListarRoupaComponent,
    canActivate: [authGuard],
    data: {
      role: 'FUNC'
    }
  },
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
