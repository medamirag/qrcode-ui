import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { GuardGuard } from './shared/guard.guard';

const routes: Routes = [
  {
    path: 'editor',
    loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule),
    canActivate :[GuardGuard]
  },
  {
    path: 'visitor',
    loadChildren: () => import('./visitor/visitor.module').then(m => m.VisitorModule)
  },
  {
    path:'',component:HomeComponent,
  },
  {
    path:'login',component:LoginComponent,
  }
  ,
  {path:"**",component:NotauthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
