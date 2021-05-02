import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ProductService } from './shared/product.service';
import {NgbNavbar} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarCollapsed = true;

  constructor( public productService: ProductService ,private router: Router) {}
  title = 'frontend';


  LogoutUser(){
    this.productService.logOutUser();
    this.router.navigate(['/users/signin'])
  }

}
