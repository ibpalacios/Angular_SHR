import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ClientListComponent } from './pages/client-module/client-list/client-list.component';


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'client-list', component: ClientListComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
