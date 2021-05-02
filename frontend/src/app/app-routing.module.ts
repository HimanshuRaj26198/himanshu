import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from '../app/product-list/product-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import {UserGuard} from './guard/user.guard';
import { ProductsComponent } from './admin/products/products.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    component: ProductListComponent,
    path: '',
    canActivate: [UserGuard] 
  },
  {
    component: SignupComponent,
    path: 'users/add'
  },

  {
    component: SignInComponent,
    path: 'users/signin'
  },
  {
    component: ProductsComponent,
    path: 'admin'
  },
  {
    component: AddProductsComponent,
    path: 'admin/addproduct'
  },

  {
    component: SingleProductComponent,
    path: 'admin/product/:id'
  },

  {
    component: ProductDetailComponent,
    path: 'product/:id'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
