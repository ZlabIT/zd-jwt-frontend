import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from './components/register-component/register.component';
import {LoginComponent} from './components/login-component/login.component';
import {DashboardComponent} from './components/dashboard-component/dashboard.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
