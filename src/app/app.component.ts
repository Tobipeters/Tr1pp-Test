import { Component, OnInit } from '@angular/core';
import { allProducts } from './content/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Tr1pp-test';
  products: any[] = allProducts;
  
  ngOnInit(): void {
    
  }

}
