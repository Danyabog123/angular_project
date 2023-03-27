import { Component, OnInit } from '@angular/core';
import { products as data } from './data/product';
import { ProductsService } from './data/products.service';
import { IProduct } from './interface/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-work';


}
