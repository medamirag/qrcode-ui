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
  hasMap:boolean=false;
  center: google.maps.LatLngLiteral = {
      lat: 35.67548283013822
,
      lng: 10.096564748426976

,
  };
  zoom = 16;

  categories:String[]=['Carte Visite',
    'Patient Alzheimer',
    'Menu Restaurant',
    'carte mariage']
item: any;
  constructor(private route: Router ,private router:ActivatedRoute,private modal: NgbModal,private formService:FormService,private styleService : StylesService)
     {

      this.styles=this.styleService.getAllStyles();
      this.borders=this.styleService.getAllBorders();
      this.widths=this.styleService.getAllWidths();
      this.activatedRoute=this.router.snapshot.params['id']
      
      if(this.activatedRoute!='0'){
        
        this.formService.getFormByIdForm(this.activatedRoute).subscribe(data=>{this.form=data;
       let item =  this.form.items.find(x=>x.type==="AddressInput");
       if(item){
        this.hasMap = true
        this.center = {lat:Number(item.lat),lng:Number(item.lng)}
       }
      
        })
      }
     }
  moveMap(event: google.maps.MapMouseEvent) {
   
  }
  getIdentifier(type:string){

    return (this.form.items.filter(x=>x.type===type).length )+1 
  }
  add(type:string){

    if(type==='EmailInput')
    {
      this.form.items.push({identifier:this.getIdentifier(type),label:"Email",type:type,value:""})

    }
    else if(type==='PhoneInput'){
      this.form.items.push({identifier:this.getIdentifier(type),label:"Télephone",type:type,value:""})

    }
    else if(type==='AddressInput'){

      if(!this.hasMap){
        this.form.items.push({identifier:this.getIdentifier(type),label:"Address",type:type,value:""})
        this.hasMap = true

      }
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

      
    
        this.form.items.push({identifier:this.getIdentifier(type),label:this.getIdentifier(type)+"",type:type,value:""})
  
    
    }
    else if(type==='AddressInput'){

      this.form.items.push({identifier:this.getIdentifier(type),label:"Address",type:type,value:""})

    }
    
    
    else{

    
    let input = prompt("Please enter the input label", "Write here");
   
    if (input == null || input == "") {
    } else {
  
      this.form.items.push({identifier:this.getIdentifier(type),label:input,type:type,value:""})

    }
  }

  }
  remove(label:string,identifier:number){
    if(confirm('do you really want to remove this item')){

      

      this.form.items=this.form.items.filter(x=>!(x.label===label&&x.identifier===identifier))
      if(label="AddressInput"){
        this.hasMap = false;
      }
      // this.form.items=this.form.items.filter(x=>x.identifier!=identifier)

    }
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
      let item : google.maps.LatLngLiteral
      if (event.latLng != null){
    let item =  this.form.items.find(x=>x.type==="AddressInput")
    
     item!.lat =this.display.lat;
     item!.lng =this.display.lng;
     
     
     //= (event.latLng.toJSON());
    }
      
      
  }




  styles:Style[]=[]
  borders:string[]=[]
  widths:string[]=[]
  form:Form={category:"",id:"",border:"border",width:"width5",private:true,
  items:[
  ],
  title:"",userId:"1",style:""
  };
  activatedRoute:string=""
  addTemplate(template:string){
    if (template==='AlzheimerPatient'){
this.form.title = template;
this.form.category=template;
this.form.style='style6'
this.form.items=[
{identifier:this.getIdentifier("TextInput"),label:"Patient's Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Brother's Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Wife's Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Son's Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("PhoneInput"),label:"Wife's Phone",type:'PhoneInput',value:""},
{identifier:this.getIdentifier("PhoneInput"),label:"Brother's Phone",type:'PhoneInput',value:""},
{identifier:this.getIdentifier("PhoneInput"),label:"Son's Phone",type:'PhoneInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Patient's Address",type:'TextInput',value:""},
// {identifier:this.getIdentifier("AddressInput"),label:"Patient's Address",type:'AddressInput',value:""},
]
this.hasMap = true
}
    else if(template==='businessCard'){
      this.form.title = template;
      this.form.private = false;
      this.form.category=template;
      this.form.style='style10';
      this.form.items=[
        {identifier:this.getIdentifier("EmailInput"),label:"Email",type:"EmailInput",value:""},
{identifier:this.getIdentifier("TextInput"),label:"Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("PhoneInput"),label:"Personal Phone",type:'PhoneInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Company's Name",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:" Address",type:'TextInput',value:""},


]


    }
    else if (template==='restaurantMenu'){
      this.form.title = template;
      this.form.private = false;
      this.form.category=template;
      this.form.style='style5'
      this.form.items=[
        {identifier:this.getIdentifier("Divider"),label:"",type:'Divider',value:""},

{identifier:this.getIdentifier("Title"),label:"Name",type:'Title',value:"Menu Principal"},
{identifier:1,label:"",type:'Divider',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Spaguetti",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Lasagne",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Grillade Mixte",type:'TextInput',value:""},

{identifier:2,label:"",type:'Divider',value:""},

{identifier:this.getIdentifier("Title"),label:"Name",type:'Title',value:"Entrée"},
{identifier:3,label:"",type:'Divider',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Salade césar",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Soupe",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Plat Tunisien",type:'TextInput',value:""},

{identifier:4,label:"",type:'Divider',value:""},

{identifier:this.getIdentifier("Title"),label:"Name",type:'Title',value:"Desser"},
{identifier:5,label:"",type:'Divider',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Tiramisso",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Boison",type:'TextInput',value:""},
{identifier:this.getIdentifier("TextInput"),label:"Salade de fruit",type:'TextInput',value:""},

    
      ]
    
    }
    
    else if (template==='carte mariage'){
      this.form.title = template;
      this.form.private = false;
      this.form.category=template;
      this.form.style='style2'
      this.form.items=[
        {identifier:this.getIdentifier("Divider"),label:"",type:'Divider',value:""},

{identifier:this.getIdentifier("Title"),label:"Name",type:'Title',value:"   بسم الله الرحمن الرحيم  "},

{identifier:this.getIdentifier("Title"),label:"Name ",type:'Title',value:" :تتشرف عائلة "},

{identifier:this.getIdentifier("Title"),label:" اسم اهل العريس و اسم  اهل العروسه",type:'Title',value:""},

{identifier:this.getIdentifier("Title"),label:"Name",type:'Title',value:"  بدعوتكم لحضور"},

{identifier:this.getIdentifier("Title"),label:"Name",type:'Title',value:"    حفل عقد قران وزفاف  "},

{identifier:this.getIdentifier("Title"),label:" اسم العريس والعروسه",type:'Title',value:""},

{identifier:this.getIdentifier("Title"),label:"Name ",type:'Title',value:"وذلك في يوم "},

{identifier:this.getIdentifier("Title"),label:"Name ",type:'Title',value:" في  "},

{identifier:this.getIdentifier("Title"),label:"Name ",type:'Title',value:" مع تمنياتنا للجميع بالخير والسعادة الدائمة"},




    
      ]
    
    }
  }






  ngOnInit(): void {

  }
  getQrCode(){
this.activeUrl=environment.baseUrl+"/visitor/"+this.router.snapshot.params['id']
    this.modal.open(this.qrCode, { size: 'lg' });
  }
  selectClass(style:string){
    this.form.style=style;
    console.log(style);
    
    
  }
  selectBorder(border:string){
    this.form.border=border;
    
  }
  selectwidth(width:string){
    this.form.width=width;
    
    
  }
 
  saveOrUpdate(){
    this.formService.saveOrUpdate(this.form).subscribe(data=>{console.log(data);
      this.route.navigate(['/editor/'+data.id]);
      
    } 
       )
  }
  

}
