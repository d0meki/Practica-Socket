import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaComponent } from './sala/sala.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path : 'dashboard', component:DashboardComponent, children:[
      // { path: '', redirectTo: 'eventos', pathMatch: 'full' },
      { path: 'salas', component: SalaComponent },
      // { path: 'profile', component: ProfileComponent },
      // { path: 'myphotos', component: MyphotosComponent },
      // { path: 'eventofotos/:id', component: EventofotosComponent },
      // { path: 'crearEvento', component: AddeventosComponent },
      // { path: 'pago-fotografo/:precio', component: PagophotographerComponent },
      // { path: 'pago-organizador/:precio', component: PagoorganizerComponent },
      // { path: 'confirmar/:id', component: ConfirmarComponent },
      { path: '**', redirectTo: 'eventos', pathMatch: 'full' },   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
