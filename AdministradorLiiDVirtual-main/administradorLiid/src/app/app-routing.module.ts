import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: "admin", 
  loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule),},
  {path: "login", 
  component: LoginComponent,},
  {path: "", 
  redirectTo: "login",
  pathMatch: "full",},
  {path: "**",
  component: PageNotFoundComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
