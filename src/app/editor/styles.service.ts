import { Injectable } from '@angular/core';
import { Style } from './style';

@Injectable({
  providedIn: 'root'
})



export class StylesService {
styles:Style[]=[
  {class:"style1-0 ",title:"Style1-0"},
  {class:"style1 ",title:"Style 1"},
  {class:"style2",title:"Style 2"},
  {class:"style2-2",title:"Style 2-2"},
  {class:"style2-3",title:"Style 2-3"},
  {class:"style2-4",title:"Style 2-4"},
  
  {class:"style3",title:"Style 3"},
  {class:"style4",title:"Style 4"},
  {class:"style4-4",title:"Style 4-4"},
  {class:"style4-5",title:"Style 4-5"},
  {class:"style5",title:"Style 5"},
  
  {class:"style6",title:"Style 6"},
  // {class:"style7",title:"Style 7"},

  {class:"style8",title:"Style 8"},
  {class:"style9",title:"Style 9"},
  {class:"style9-1",title:"Style 9-1"},
  {class:"style9-2",title:"Style 9-2"},
  {class:"style10",title:"Style 10"},

]
borders:string[]=["border1","border2","border3","border4","border5","border6","border7"

]
widths:string[]=["width3","width4","width5","width6","width7","width9","width8","width10"

]

  constructor() { }
  getAllStyles(){
    return this.styles
  }
  getAllWidths(){
    return this.widths
  }
  getAllBorders(){
    return this.borders
  }
}
