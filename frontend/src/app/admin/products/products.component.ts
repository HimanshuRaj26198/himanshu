import { Component, OnInit } from '@angular/core';
import {AdminService} from '../shared/admin.service';
import {ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  collection:any = [];

  constructor(private admin:AdminService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.admin.getProductAdmin().subscribe(
      res=> this.collection = res,
      err=> console.log('Error Retrirving data')
    )
  }

  clickDel(){
    this.router.snapshot.params.id
  }

  removeProduct(item){
   this.collection.splice(item-1, 1)

   this.admin.deleteProduct(item).subscribe(
     res=> {console.log("deleted")
           },
     err=> console.log("Error")
   )

  }

}
