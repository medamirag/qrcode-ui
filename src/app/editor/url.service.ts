import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl = environment.serverUrl
    token: any;
  
    constructor(private httpClient:HttpClient) {
     }
     
    
     getUrl():Observable<URL[]>{
      return this.httpClient.get<URL[]>(`${this.baseUrl}/patient`)
     }
    //  deletePatient(id:number):Observable<Patient>{
    //   return this.httpClient.delete<Patient>(`${this.url}/patient/${id}`)
    //  }
    //  addPatientService(patient:Patient):Observable<any>{
    //   return this.httpClient.post<any>(`${this.url}/patient/add`,patient,httpOptions)
    //  }
  
    //  getPatientByIdService(id:number):Observable<Patient[]>{
    //   return this.httpClient.get<Patient[]>(`${this.url}/patient/${id}`)
    //  }
    //  updatePatientService(id:number, patient:Patient):Observable<Patient[]>{
    //   return this.httpClient.patch<Patient[]>(`${this.url}/patient/${id}`,patient,httpOptions)
    //  }
}