import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapiosComponent } from './componentes/cardapios/cardapios.component';
import { LojasComponent } from './componentes/lojas/lojas.component';
import { EntrarComponent } from './componentes/paginas/entrar/entrar.component';
import { HomeComponent } from './componentes/paginas/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrar',
    pathMatch: 'full'
  },
  {
    path:'entrar',
    component: EntrarComponent
  },
  {
    path:'home',
    component: HomeComponent,
    children: [
      {
        path: 'lojas',
        component: LojasComponent
      },
      {
        path:'cardapio',
        component: CardapiosComponent
      },
      {
        path: ':id',
        component: LojasComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
