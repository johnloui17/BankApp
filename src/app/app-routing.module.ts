import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';

const routes: Routes = [
  {
    path:'',component:LoginPageComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {path:'register',component:RegisterPageComponent
  },
  {
    path:"transaction",component:TransactionPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
