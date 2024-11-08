import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CartModule } from './cart/cart.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    MatToolbarModule,
    MatButtonModule,
    CartModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        
      ])
    ),
    
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
