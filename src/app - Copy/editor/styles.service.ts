import { Injectable } from '@angular/core';
import { Style } from './style';

@Injectable({
  providedIn: 'root'
})
export class StylesService {
styles:Style[]=[
  {class:"style1 ",title:"Style 1"},
  {class:"style2",title:"Style 2"},
  {class:"style3",title:"Style 3"},
  {class:"bg-primary ",title:"Style 4"},
  {class:"bg-secondary",title:"Style 5"},
  {class:"bg-warning",title:"Style 6"},
  {class:"bg-danger",title:"Style 7"},
  {class:"bg-white",title:"Style 8"},
  {class:"bg-success",title:"Style 9"},
  {class:"style10",title:"Style 10"},

]

  constructor() { }
  getAllStyles(){
    return this.styles
  }
}
