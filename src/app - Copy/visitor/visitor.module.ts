import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { CardComponent } from './card/card.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    VisitorRoutingModule
  ]
})
export class VisitorModule { }
