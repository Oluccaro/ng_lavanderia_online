import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente';
import { AuthModule } from './auth';
import { NavBarModule } from './nav-bar';
import { FuncionarioModule } from './funcionario';
import { HttpClientModule } from '@angular/common/http';
import { PedidoModule } from './pedido/pedido.module';
import { RoupaModule } from './roupa/roupa.module';
import { ModalModule } from './modal';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    AuthModule,
    NavBarModule,
    FuncionarioModule,
    HttpClientModule,
    PedidoModule,
    RoupaModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
