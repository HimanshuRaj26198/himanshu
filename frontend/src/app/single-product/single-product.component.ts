import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../admin/shared/admin.service';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
image;


  updateForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    productDetail: new FormControl('')
  })


collection: any = [];
  
  constructor(private admin: AdminService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.admin.singleProduct(this.router.snapshot.params.id).subscribe(
      res=>{ console.log("Success")
      this.collection = res;
      this.updateForm = new FormGroup({
        name: new FormControl(res['name']),
        description: new FormControl(res['description']),
        price: new FormControl(res['price']),
        productDetail: new FormControl(res['productDetail'])
      })
      this.image = res['file'];
    },
      err=> console.log("Error")
    )

  }

  selectFile(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.image = file
    }
  }

  renewProduct(){
const formData = new FormData();
formData.append('file', this.image, this.image.name);
formData.append('name', this.updateForm.get('name').value);
formData.append('description', this.updateForm.get('description').value);
formData.append('price', this.updateForm.get('price').value);
formData.append('productDetail', this.updateForm.get('productDetail').value);

    this.admin.updateProduct(this.router.snapshot.params.id, this.updateForm.value ,formData).subscribe(
      res=> {this.collection = res;
            console.log("Updated Sucessfully")
            this.updateForm.reset({})},
      err=> console.log("Error updating")
    )
  }

}
