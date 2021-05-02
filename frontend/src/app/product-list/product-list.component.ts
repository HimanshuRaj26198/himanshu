import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  collection:any = [];
  order : boolean = true;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
  
    this.product.getList().subscribe(
      res => this.collection = res,
      err => console.log('error') 
    )

  }

  sortName(){
   if(this.order){let newArr = this.collection.sort((a, b)=> a.price - b.price)
   this.collection = newArr}
  else{
    let newArr = this.collection.sort((a, b)=> b.price - a.price)
    this.collection = newArr
  }
  this.order = !this.order
}


}
