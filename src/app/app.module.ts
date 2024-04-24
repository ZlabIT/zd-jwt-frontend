import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AuthContentComponent} from './components/auth-content/auth-content.component';
import {WelcomeContentComponent} from './components/welcome-content/welcome-content.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {ContentComponent} from './components/content/content.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AuthContentComponent,
        WelcomeContentComponent,
        LoginFormComponent,
        ContentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
