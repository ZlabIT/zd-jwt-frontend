import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/register-component/register.component';
import {LoginComponent} from './components/login-component/login.component';
import {DashboardComponent} from './components/dashboard-component/dashboard.component';

const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
