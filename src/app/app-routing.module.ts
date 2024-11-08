import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';

const routes: Routes = [
  {path: 'log-in', component: LogInComponent},
  {path:'',redirectTo:'/products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'cart', component: CartViewComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
