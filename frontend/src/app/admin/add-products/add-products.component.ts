import { Component, OnInit } from '@angular/core';
import {AdminService} from '../shared/admin.service';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
image;


  constructor(private admin: AdminService, private formBuilder: FormBuilder) { }

   

  addproductForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    productDetail: new FormControl('')
  })
 
  product = this.addproductForm.value
  ngOnInit(){
}

  

  selectFile(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.image = file
    }
  }


collectProduct(){
  const fileData = new FormData();
  fileData.append('file', this.image, this.image.name) ;
  fileData.append('name', this.addproductForm.get('name').value);
  fileData.append('description', this.addproductForm.get('description').value);
  fileData.append('price', this.addproductForm.get('price').value);
  fileData.append('productDetail', this.addproductForm.get('productDetail').value);

  


this.admin.addProductAdmin( this.addproductForm.value,fileData).subscribe(
res => {console.log("Image Uploaded")
        this.addproductForm.reset({})},
err=> console.log("Error")
)}


}
