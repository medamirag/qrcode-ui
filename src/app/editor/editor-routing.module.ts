import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { FormListComponent } from './form-list/form-list.component';

const routes: Routes = [
  {path:"",component:FormListComponent},
  {path:":id",component:FormListComponent},
  {path:"forms/:id",component:AddFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
