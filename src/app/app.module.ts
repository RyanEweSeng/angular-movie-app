import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { RegisterModule } from './features/register/register.module';
import { BrowseModule } from './features/browse/browse.module';

import { AuthService } from './core/services/auth/auth.service';
import { UserService } from './core/services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ShareModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    BrowseModule,
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
