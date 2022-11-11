import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Authenticate
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthenticateService } from './shared/auth/authenticate.service';
import { AuthInterceptorInterceptor } from './shared/interceptor/auth-interceptor.interceptor';

// Forms 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Frameworks 
import { PrimengModule } from './global/libraries/primeng.module';

//Login
import { LoginComponent } from './global/views/session/login/login.component';
import { RegisterComponent } from './global/views/session/register/register.component';
import { ResetPassComponent } from './global/views/session/reset-pass/reset-pass.component';

// Layout
import { MainComponent } from './global/layout/main/main.component';
import { NavbarMainComponent } from './global/layout/navbar-main/navbar-main.component';
import { NavbarComponent } from './global/layout/navbar/navbar.component';
import { FooterMainComponent } from './global/layout/footer-main/footer-main.component';
import { FooterComponent } from './global/layout/footer/footer.component';

import { AppComponent } from './app.component';
import { ProfileComponent } from './global/views/pages/profile/profile.component';

// Page not found 
import { PageNotFoundComponent } from './global/views/page-not-found/page-not-found.component';
import { DashboardComponent } from './global/views/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarMainComponent,
    NavbarComponent,
    FooterMainComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ResetPassComponent,
    PageNotFoundComponent,
    DashboardComponent
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true },
    AuthenticateService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
