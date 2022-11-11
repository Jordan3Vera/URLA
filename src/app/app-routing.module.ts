import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './global/layout/main/main.component';
import { LoginComponent } from './global/views/session/login/login.component';
import { RegisterComponent } from './global/views/session/register/register.component';
import { PageNotFoundComponent } from './global/views/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ResetPassComponent } from './global/views/session/reset-pass/reset-pass.component';
import { DashboardComponent } from './global/views/pages/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logoup', component: RegisterComponent },
  { path: 'reset-pass', component: ResetPassComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
