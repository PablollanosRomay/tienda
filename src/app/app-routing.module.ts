import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { MenuPageComponent } from './pages/menu/menu.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { PedidosPageComponent } from './pages/pedidos/pedidos.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'contacto', component: ContactPageComponent },
  { path: 'pedidos', component: PedidosPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
