import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {

  myProducts: ProductModel[] = [];

  constructor(private x:ProductsService, private cartService:CartService) {}

  ngOnInit() :void {
    /*refering to the service by creating an object of that service "x" */
    this.x.getData().subscribe( (data) =>{             /*getting an observable that's why subscription*/
      console.log(data);
      this.myProducts = data;
    }
    );
  }

  toggleFav(product: any){
    product.isFav = !product.isFav;
  }

  addtoCart(){
    this.cartService.addtoCart();
  }

}
