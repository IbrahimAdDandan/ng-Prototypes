import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    Login1Component,
    Login2Component,
    AttendanceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    PasswordModule,
    TableModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
