import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  counter:number = 0;

  addtoCart(){
    this.counter++;
  }

}
