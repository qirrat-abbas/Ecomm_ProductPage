import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  counter :number = 0;

  constructor(private cartService : CartService){}

  ngOnInit(){
    this.updateCart();
  }
 
  updateCart(){
    this.counter = this.cartService.counter;
  }

  ngDoCheck() {
    this.updateCart();
  }
}
