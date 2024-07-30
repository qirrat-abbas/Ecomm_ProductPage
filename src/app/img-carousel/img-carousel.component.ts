import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-img-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './img-carousel.component.html',
  styleUrl: './img-carousel.component.css'
})

export class ImgCarouselComponent {

  images: string[] = [
    '../assets/images/sale1.jpg',
    '../assets/images/sale2.jpg',
    '../assets/images/sale3.jpg',
    '../assets/images/sale5.jpg'
  ];

  constructor(){
    
  }

}
