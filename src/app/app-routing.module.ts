import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ventas',
    loadChildren: () =>
      import('./features/ventas/ventas.module').then((m) => m.VentasModule),
  },
  {
    path: '',
    redirectTo: '/ventas',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
