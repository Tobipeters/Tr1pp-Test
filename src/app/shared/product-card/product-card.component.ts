import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.product);
  }

  viewProduct = (id: number) => this.router.navigate(['product', id]);
}
