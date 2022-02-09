import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  itemCount: number = 0;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.itemCount = this.cart.productItems.length
    console.log(this.itemCount, " Cart count")
  }
}
