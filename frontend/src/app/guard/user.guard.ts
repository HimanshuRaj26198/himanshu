import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
import {Router} from '@angular/router';
import { ProductService } from '../shared/product.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private userService:UserService, private router:Router, private productService:ProductService) {}

  canActivate():boolean{
    if(this.productService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/users/signin'])
      return false;
    }
  }
  
}
