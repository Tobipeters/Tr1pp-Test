import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedModule } from './feed/feed.module';
import { CartService } from './services/cart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeedModule,
    BrowserAnimationsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
