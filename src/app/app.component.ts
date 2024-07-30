import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ImgCarouselComponent } from "./img-carousel/img-carousel.component";
import { ProductsComponent } from "./products/products.component";
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ImgCarouselComponent, ProductsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Ecom_Products';
}
