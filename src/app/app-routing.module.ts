import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'nav', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login1', component: Login1Component },
  { path: 'login2', component: Login2Component },
  { path: 'attendance', component: AttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
