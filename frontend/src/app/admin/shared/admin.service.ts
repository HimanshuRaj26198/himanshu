import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductAdmin} from './product-admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  selectedProductAdmin :  ProductAdmin = {

    name : '',
    description: '',
    price: '',
    productDetail: ''  
  
}

 root = 'http://localhost:3000/'
//root =  'https://obscure-waters-87437.herokuapp.com/'

  url = this.root + 'admin/productlist'
  addUrl = this.root + 'admin/addproducts'
  sProd = this.root + 'admin/product'
  dProd = this.root + 'admin/delete'



  constructor(private http:HttpClient) { }

 
  
  getProductAdmin(){
    return this.http.get(this.url)
  }

  addProductAdmin(product: ProductAdmin, file){

    
    return this.http.post(this.addUrl, product &&  file)
  }

  singleProduct(id){
    return this.http.get(`${this.sProd}/${id}`)
  } 

    updateProduct(id, product : ProductAdmin, file ){
      return this.http.post(`${this.sProd}/${id}`, product && file)
    }

    deleteProduct(id: string ){
      return this.http.delete(`${this.dProd}/${id}`)
    }




}
