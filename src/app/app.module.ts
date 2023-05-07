import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { RegisterModule } from './features/register/register.module';
import { BrowseModule } from './features/browse/browse.module';

import { AppComponent } from './app.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
