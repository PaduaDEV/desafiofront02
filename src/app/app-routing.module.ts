import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasComponent } from './vendas/vendas.component';
import { CadastroCursoComponent } from './cadastro-curso/cadastro-curso.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'',component: VendasComponent},
  {path:'cadastro',component: CadastroCursoComponent},
  {path:'login', component: LoginComponent},
  {path:'user', component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
