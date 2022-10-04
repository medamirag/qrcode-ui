import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'api/editor',
    loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule)
  },
  {
    path: 'api/visitor',
    loadChildren: () => import('./visitor/visitor.module').then(m => m.VisitorModule)
  },
  {
    path:'',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
