import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { ChatComponent } from './coomponent/chat/chat.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './coomponent/dashboard/dashboard.component';
const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  { path: 'dashboard', 
  component: DashboardComponent,
  loadChildren:() => import('./coomponent/dashboard/dashboard.module')
  .then(m => m.DashboardModule)
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path:':room',
    component: RoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
