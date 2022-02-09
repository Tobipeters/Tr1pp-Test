import { Component, ViewEncapsulation, ViewChild , OnInit} from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);
import { ActivatedRoute } from '@angular/router';
import { allProducts } from "src/app/content/products";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  thumbsSwiper: any;
  selectedProduct: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cart: CartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>{
      this.productId = param['id']
    });

    const item = allProducts.filter((item:any)=>{
      return this.productId == item.id
    })

    this.selectedProduct = item[0];

    console.log(this.selectedProduct)


  }

  addToBag = (product:any) =>{
    this.cart.addToCart(product);
    console.log(this.cart.productItems)
  }

}
