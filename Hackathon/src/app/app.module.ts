import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Bookslot1Component } from './bookslot1/bookslot1.component';
import { Login1Component } from './login1/login1.component';
import { Logout1Component } from './logout1/logout1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    Bookslot1Component,
    Login1Component,
    Logout1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
