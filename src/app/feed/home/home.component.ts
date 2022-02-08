import { Component, OnInit } from '@angular/core';
import { allProducts } from 'src/app/content/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:any[] = allProducts

  constructor() { }

  ngOnInit(): void {
  }

}
