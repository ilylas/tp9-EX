import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';


const url='http://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient){}

  getProduits():Observable<Product[]>{
    return this.http.get<Product[]>(url);
  }

  addProduits(p:Product):Observable<Product[]>{
    return this.http.post<Product[]>(url,p)
  }
}
