import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { EnergiaComponent } from './energia/energia.component';
import { ListaUnidadesComponent } from './lista-unidades/lista-unidades.component';
import { CriarUnidadesComponent } from './criar-unidades/criar-unidades.component';
import { AtualizarUnidadesComponent } from './atualizar-unidades/atualizar-unidades.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,

    EnergiaComponent,
    ListaUnidadesComponent,

    CriarUnidadesComponent,
     AtualizarUnidadesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
