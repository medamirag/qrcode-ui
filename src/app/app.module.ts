import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
