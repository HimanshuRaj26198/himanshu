import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  collection: any = []

  constructor( private product: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.product.singleProduct(this.router.snapshot.params.id).subscribe(
      res=> this.collection = res,
      err=> console.log("Error fetching data")
    )

  }

}
