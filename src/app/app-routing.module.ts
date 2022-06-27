import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ListaUnidadesComponent } from './lista-unidades/lista-unidades.component';
import { AtualizarUnidadesComponent } from './atualizar-unidades/atualizar-unidades.component';
import { CriarUnidadesComponent } from './criar-unidades/criar-unidades.component';
import { EnergiaComponent } from './energia/energia.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'listaUnidades', component: ListaUnidadesComponent},
  { path: 'criarUnidades', component: CriarUnidadesComponent},
  { path: 'atualizarUnidades/:id', component: AtualizarUnidadesComponent},
  { path: 'energia', component: EnergiaComponent},
  { path:'', redirectTo: '/login' , pathMatch: 'full' },
  { path:'**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
