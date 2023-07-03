import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/welcome/welcome.module').then((module) => module.WelcomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then((module) => module.HomeModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
