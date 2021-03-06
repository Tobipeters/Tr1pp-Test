import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FeedRoutingModule } from './feed-routing.module';
import { SwiperModule } from 'swiper/angular';

// import { FeedComponent } from './feed.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule, 
    FeedRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class FeedModule { }
