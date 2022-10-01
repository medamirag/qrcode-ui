import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { AddFormComponent } from './add-form/add-form.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { EditorMenuComponent } from './editor-menu/editor-menu.component';


@NgModule({
  declarations: [
    AddFormComponent,
    EditorMenuComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
