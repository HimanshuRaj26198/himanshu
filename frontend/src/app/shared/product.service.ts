import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, private router: Router) { }
  root='http://localhost:3000/'
  //root =  'https://obscure-waters-87437.herokuapp.com/'
  url = this.root + "products/list"
  sProd = this.root + 'admin/product'

  getList(){
    return this.http.get(this.url)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logOutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  
  }
  
  singleProduct(id){
    return this.http.get(`${this.sProd}/${id}`)
  } 

}
