
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../classes/employe';
import { HttpClient } from '@angular/common/http';

const url='http://localhost:3000/employes'
@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient){}

  getEmployes():Observable<Employe[]>{
    return this.http.get<Employe[]>(url)
  }

  addEmploye(e:Employe):Observable<Employe>{
    return this.http.post<Employe>(url,e)
  }
}
