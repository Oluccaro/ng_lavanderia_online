import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cliente/home/home.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { authGuard } from './auth';

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
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
