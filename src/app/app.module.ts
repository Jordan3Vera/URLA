import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Forms 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Frameworks 
import { PrimengModule } from './global/libraries/primeng.module';

import { AppComponent } from './app.component';
import { MainComponent } from './global/layout/main/main.component';
import { NavbarMainComponent } from './global/layout/navbar-main/navbar-main.component';
import { NavbarComponent } from './global/layout/navbar/navbar.component';
import { FooterMainComponent } from './global/layout/footer-main/footer-main.component';
import { FooterComponent } from './global/layout/footer/footer.component';
import { LoginComponent } from './global/views/session/login/login.component';
import { RegisterComponent } from './global/views/session/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarMainComponent,
    NavbarComponent,
    FooterMainComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
