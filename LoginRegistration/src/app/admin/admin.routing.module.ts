 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent, UsersComponent } from './components';
 
 
const routes: Routes = [
    {   path: '', component: UsersComponent,
        children :[
            { path: '', component: UserDetailComponent},
        ]
    },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }