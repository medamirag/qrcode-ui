import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Form } from './form';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private httpClient:HttpClient) { }

form:Form={category:"",
style:"",
items:[
],
title:"",userId:"",id:""
}
baseUrl = environment.serverUrl

forms:Form[]=[]
saveOrUpdate(form:Form){
  form.userId=localStorage.getItem('userId')+""
  console.log("before",form);
  
    return this.httpClient.post<Form>(`${this.baseUrl}/forms/addForm`,form)
  }
  getAllFormsByUser():Observable<Form[]>{
    let userId = localStorage.getItem('userId')
    return this.httpClient.get<Form[]>(`${this.baseUrl}/forms/User/${userId}`)
  }
  deleteByFormID(formId:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}/forms/${formId}`)
  }
  getFormByIdForm(formId:string):Observable<Form>{
    return this.httpClient.get<Form>(`${this.baseUrl}/forms/${formId}`)
  }
  getAllForms():Observable<Form[]>{
    return this.httpClient.get<Form[]>(`${this.baseUrl}/forms`)

  }
}
