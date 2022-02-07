import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavComponent,
    FooterComponent,
    ProductCardComponent,
  ]
})
export class SharedModule { }
