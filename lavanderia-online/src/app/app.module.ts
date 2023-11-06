import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente';
import { AuthModule } from './auth';
import { NavBarModule } from './nav-bar';
import { FuncionarioModule } from './funcionario';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    AuthModule,
    NavBarModule,
    FuncionarioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
