import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorRoutingModule } from './editor-routing.module';
import { AddFormComponent } from './add-form/add-form.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { RouterModule } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';


@NgModule({
  declarations: [
    AddFormComponent,
    FormListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GoogleMapsModule,
    EditorRoutingModule,
    FormsModule,
    NgbModule,
    QRCodeModule,
    NgbModalModule,
  ]
})
export class EditorModule { }
