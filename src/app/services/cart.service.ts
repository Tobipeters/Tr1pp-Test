import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
 
export class CartService {
  productItems: any[] = [];

  constructor() {}

  addToCart = (product: any) => {
    this.productItems.push(product);
  };

  get getCartItems () {
    return this.productItems;
  };

  clearAllCart = () =>{
    this.productItems = []
  }

}
