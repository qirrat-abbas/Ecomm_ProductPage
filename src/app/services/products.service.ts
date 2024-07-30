import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private Http: HttpClient) { }

    getData(): Observable<ProductModel[]>{
      return this.Http.get<ProductModel[]>('https://fakestoreapi.com/products');
  
    }
    /*since we wil deal with multiple data it should be an array of ProductModel[] */

}
