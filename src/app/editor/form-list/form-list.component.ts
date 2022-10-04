import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Form } from '../form';
import { FormService } from '../form.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
forms:Form[]=[]
qrCodeDownloadLink:any
  constructor(private route:Router,private router:ActivatedRoute,private modal: NgbModal,private formService:FormService) {

   }
   @ViewChild('qrCode', { static: true }) qrCode!: TemplateRef<any>;
   activeUrl:string=""


  ngOnInit(): void {
    localStorage.setItem('userId',"1")
    this.formService.getAllFormsByUser().subscribe(data=>this.forms=data)
  }
  deleteByFormID(id:string){
    this.formService.deleteByFormID(id).subscribe(data=>{console.log(data);
      this.formService.getAllFormsByUser().subscribe(data=>this.forms=data)

    }    );

  }
  loadQrCode(url: any){
    this.qrCodeDownloadLink = url;
    console.log(url);
    
  }
   getQrCode(id:string){
this.activeUrl=environment.baseUrl+"visitor/"+id
    this.modal.open(this.qrCode, { size: 'lg' });
  }

  share(){
    
  }
}
