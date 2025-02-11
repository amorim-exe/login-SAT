import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SuccessComponent } from './success/success.component';
import { appRoutes } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoginComponent,
    CadastroComponent,
    SuccessComponent
  ],
  providers: []
})
export class AppModule { }

import { bootstrapApplication } from '@angular/platform-browser';
bootstrapApplication(AppComponent);
