import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from 'src/app/editor/form';
import { FormService } from 'src/app/editor/form.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  form:Form={category:"",id:"",width:"width5",
  style:"",
  items:[
  ],
  title:"",userId:"1"
  };
  constructor(private formService:FormService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.formService.getFormByIdForm(this.activatedRoute.snapshot.params['id']).subscribe(data=>this.form=data)
  }
  

  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
      console.log(this.center);
      
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}
