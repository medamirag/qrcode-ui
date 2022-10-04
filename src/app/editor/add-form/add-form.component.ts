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
      lat: 35.49961609339906,
      lng: 35.49961609339906,
  };
  zoom = 16;
  constructor(private route: Router ,private router:ActivatedRoute,private modal: NgbModal,private formService:FormService,private styleService : StylesService)
     {
      console.log("this.center",this.center);

      this.styles=this.styleService.getAllStyles();
      this.borders=this.styleService.getAllBorders();
      this.activatedRoute=this.router.snapshot.params['id']
      
      if(this.activatedRoute!='0'){
        console.log("this.activatedRoute"+this.activatedRoute);
        
        this.formService.getFormByIdForm(this.activatedRoute).subscribe(data=>{this.form=data;
       let item =  this.form.items.find(x=>x.type==="AddressInput");
       if(item){
        this.center = {lat:Number(item.lat),lng:Number(item.lng)}
       }
      
        })
      }
     }
  moveMap(event: google.maps.MapMouseEvent) {
   console.log("moved");
   
  }
  getIdentifier(type:string){
    // console.log((this.form.items.filter(x=>x.type===type).length)+1);
        
    return (this.form.items.filter(x=>x.type===type).length )+1 
  }
  add(type:string){
    console.log(type);

    if(type==='EmailInput')
    {
      this.form.items.push({identifier:this.getIdentifier(type),label:"Email",type:type,value:""})

    }
    else if(type==='PhoneInput'){
      this.form.items.push({identifier:this.getIdentifier(type),label:"Télephone",type:type,value:""})

    }
    else if(type==='AddressInput'){

      this.form.items.push({identifier:this.getIdentifier(type),label:"Address",type:type,value:""})

    }
    
    else if(type==='Title'){

      let input = prompt("Please enter the Title", "Write here");
      let text;
      if (input == null || input == "") {
      } else {
    
        this.form.items.push({identifier:this.getIdentifier(type),label:input,type:type,value:input})
  
      }
    }
    else if(type==='Divider'){

      
    
        this.form.items.push({identifier:this.getIdentifier(type),label:"",type:type,value:""})
  
    
    }
    else if(type==='AddressInput'){

      this.form.items.push({identifier:this.getIdentifier(type),label:"Address",type:type,value:""})

    }
    
    
    else{

    
    let input = prompt("Please enter the input label", "Write here");
    let text;
    if (input == null || input == "") {
    } else {
  
      this.form.items.push({identifier:this.getIdentifier(type),label:input,type:type,value:""})

    }
  }

  }
  remove(label:string,identifier:number){
    if(confirm('do you really want to remove this item')){

      

      this.form.items=this.form.items.filter(x=>!(x.label===label&&x.identifier===identifier))
      
      // this.form.items=this.form.items.filter(x=>x.identifier!=identifier)

    }
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
      let item : google.maps.LatLngLiteral
      if (event.latLng != null){
    let item =  this.form.items.find(x=>x.type==="AddressInput")
    console.log("item",item);
    
     item!.lat =this.display.lat;
     item!.lng =this.display.lat;
     
     
     //= (event.latLng.toJSON());
    }
      
      
  }




  styles:Style[]=[]
  borders:string[]=[]
  form:Form={category:"",id:"",border:"border",
  items:[
  ],
  title:"",userId:"1",style:""
  };
  activatedRoute:string=""
  addTemplate(template:string){
    if (template==='AlzheimerPatient'){
this.form.title = template;
this.form.category=template;
this.form.items=[
{identifier:this.getIdentifier("TextInput"),label:"Patient Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Brother's Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Wife Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Son's Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("PhoneInput"),label:"Wife's Phone",type:'PhoneInput',value:""},
{identifier:this.getIdentifier("PhoneInput"),label:"Brother's Phone",type:'PhoneInput',value:""},
{identifier:this.getIdentifier("PhoneInput"),label:"Son's Phone",type:'PhoneInput',value:""},
{identifier:this.getIdentifier("AddressInput"),label:"Patient's Address",type:'AddressInput',value:""},
{identifier:this.getIdentifier("AddressInput"),label:"Brother's Address",type:'AddressInput',value:""},
{identifier:this.getIdentifier("AddressInput"),label:"Son's Address",type:'AddressInput',value:""},

]
    }
    else if(template==='businessCard'){
      this.form.title = template;
      this.form.category=template;
      this.form.items=[{identifier:this.getIdentifier("EmailInput"),label:"Email",type:"EmailInput",value:""},
{identifier:this.getIdentifier("TextInput"),label:"Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("PhoneInput"),label:"Personal Phone",type:'PhoneInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Company's Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("PhoneInput"),label:"Company's Phone",type:'PhoneInput',value:""},
{identifier:this.getIdentifier("AddressInput"),label:"Company's Address",type:'AddressInput',value:""},

]

    }
    else if (template==='restaurantMenu'){
      this.form.title = template;
      this.form.category=template;
      this.form.items=[
        {identifier:this.getIdentifier("Divider"),label:"",type:'Divider',value:""},

{identifier:this.getIdentifier("Title"),label:"Name",type:'Title',value:"Menu Principal"},
{identifier:this.getIdentifier("Divider"),label:"",type:'Divider',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Spaguetti",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Lasagne",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Grillade Mixte",type:'TextInput',value:""},

{identifier:this.getIdentifier("Divider"),label:"",type:'Divider',value:""},

{identifier:this.getIdentifier("Title"),label:"Name",type:'Title',value:"Entrée"},
{identifier:this.getIdentifier("Divider"),label:"",type:'Divider',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Salade césar",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Soupe",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Plat Tunisien",type:'TextInput',value:""},

{identifier:this.getIdentifier("Divider"),label:"",type:'Divider',value:""},

{identifier:this.getIdentifier("Title"),label:"Name",type:'Title',value:"Desser"},
{identifier:this.getIdentifier("Divider"),label:"",type:'Divider',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Tiramisso",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Boison",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Salade de fruit",type:'TextInput',value:""},

    
      ]
    
    }}
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
      this.route.navigate(['/api/editor']);
    } 
       )
  }
  

}
