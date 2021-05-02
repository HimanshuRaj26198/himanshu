import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private userservice:UserService, private router:Router) { }


  ngOnInit(): void {
  }

  getUser(){
    this.userservice.userLogin(this.loginForm.value).subscribe(
      res=>{ console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/'])
          let user = res;
      },
      err=>{
        console.log('error')
      }
    )
  }


}
