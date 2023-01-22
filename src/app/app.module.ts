import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpwdComponent } from './components/forgotpwd/forgotpwd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthinterceptorsService } from './service/authinterceptors.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { OrdertableComponent } from './components/dashboard/ordertable/ordertable.component';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { ChartComponent } from './components/dashboard/chart/chart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

import { Chart } from 'chart.js';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ForgotpwdComponent,
    OrdertableComponent,
    OverviewComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ProgressbarModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,

  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass:AuthinterceptorsService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
