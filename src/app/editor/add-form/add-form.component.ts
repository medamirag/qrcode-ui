import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Form } from '../form';
import { FormService } from '../form.service';
import { StylesService } from '../styles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Style } from '../style';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  @ViewChild('qrCode', { static: true }) qrCode!: TemplateRef<any>;
  display: any;
  activeUrl:string=""
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  constructor(private route: Router ,private router:ActivatedRoute,private modal: NgbModal,private formService:FormService,private styleService : StylesService)
     {
      this.styles=this.styleService.getAllStyles();
      this.borders=this.styleService.getAllBorders();
      this.activatedRoute=this.router.snapshot.params['id']
      
      if(this.activatedRoute!='0'){
        console.log("this.activatedRoute"+this.activatedRoute);
        
        this.formService.getFormByIdForm(this.activatedRoute).subscribe(data=>this.form=data)
      }
     }
  moveMap(event: google.maps.MapMouseEvent) {
    let item : google.maps.LatLngLiteral
      if (event.latLng != null){
    let item =  this.form.items.find(x=>x.type==="AdressInput")
     item!.lat =this.display.lat;
     item!.lng =this.display.lat;
     
     
     //= (event.latLng.toJSON());
    }
      
  }
  add(type:string){
    console.log(type);

    if(type==='EmailInput')
    {
      this.form.items.push({label:"Email",type:type,value:""})

    }
    else if(type==='PhoneInput'){
      this.form.items.push({label:"Télephone",type:type,value:""})

    }
    else if(type==='AddressInput'){

      this.form.items.push({label:"Address",type:type,value:""})

    }
    
    else{

    
    let input = prompt("Please enter the input label", "Write here");
    let text;
    if (input == null || input == "") {
    } else {
  
      this.form.items.push({label:input,type:type,value:""})

    }
  }

  }
  remove(label:string){
    this.form.items=this.form.items.filter(x=>x.label!=label)
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }




  styles:Style[]=[]
  borders:string[]=[]
  form:Form={category:"",id:"",border:"border",
  items:[
  ],
  title:"",userId:"1",style:""
  };
  activatedRoute:string=""
  
    

  ngOnInit(): void {

  }
  getQrCode(){
this.activeUrl=environment.baseUrl+"/visitor/"+this.router.snapshot.params['id']
    this.modal.open(this.qrCode, { size: 'lg' });
  }
  selectClass(style:string){
    this.form.style=style;
    
  }
  selectBorder(border:string){
    this.form.border=border;
    
  }
 
  saveOrUpdate(){
    this.formService.saveOrUpdate(this.form).subscribe(data=>{console.log(data);
      this.route.navigate(['/editor']);
    } 
       )
  }
  

}
