import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
import { FormService } from '../form.service';
import { Style } from '../style';
import { StylesService } from '../styles.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
    let item : google.maps.LatLngLiteral
      if (event.latLng != null){
     this.form.items.find(x=>x.type==="AdressInput")!.center=this.display;
     
     
     
     //= (event.latLng.toJSON());
    }
      
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }




  styles:Style[]=[]
  form:Form={category:"",
  style:{class:"",title:""},
  items:[
  ],
  title:"",userId:"1"
  };
  
    constructor(private formService:FormService,private styleService : StylesService) {
      this.form=this.formService.getForm();
      this.styles=this.styleService.getAllStyles();
     }

  ngOnInit(): void {
  }
  selectClass(style:Style){
    this.form.style=style;
    
  }
  saveStyle(){
    this.formService.saveForm(this.form)
  }
  

}
