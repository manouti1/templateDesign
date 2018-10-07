import { Component } from '@angular/core';
import { Product } from './models/Products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products:Product[]=[
    new Product("../assets/images/img.png","iPhone 6 Black",1000,"AED"),
    new Product("../assets/images/img.png","iPhone 7 Black",2000,"AED"),
    new Product("../assets/images/img.png","iPhone 8 Black",3000,"AED")
  ]
}
