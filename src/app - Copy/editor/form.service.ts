import { Injectable } from '@angular/core';
import { Form } from './form';

@Injectable({
  providedIn: 'root'
})
export class FormService {
form:Form={category:"Business Card",
style:{class:"",title:""},
items:[
  {label:"email",type:"EmailInput",value:"email1@gmail.com"},
  {label:"phone",type:"PhoneInput",value:"73665333"},
  {label:"nom",type:"TextInput",value:"Mohamed"},
  {label:"prenom",type:"TextInput",value:"Salah"},
  {label:"Adresse",type:"AdressInput",value:"Salah"},
],
title:"Carte visite",userId:"1"
}
  constructor() { }

  getForm():Form{
    return this.form
  }
  saveForm(form:Form){
    this.form = form
  }
}
