import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { AddFormComponent } from './add-form/add-form.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    AddFormComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
