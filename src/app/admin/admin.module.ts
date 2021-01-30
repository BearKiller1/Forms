import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IdkwhatnotfoundComponent } from './idkwhatnotfound/idkwhatnotfound.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, DashboardComponent, IdkwhatnotfoundComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
