import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //sem nada depois da barra vai pra home
    pathMatch: 'full', //faz o tratamento para evitar q o site seja acessado com espaços em branco após o endereço
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m)=> m.HomeModule) //lazyloading será acessado de acordo com a requisição da rota carregando dinamicamente, função import retorna promise por isso o then
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
