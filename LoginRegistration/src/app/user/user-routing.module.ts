import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../Auth/auth.guard';
import { UserHomeComponent, UserProfileComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
