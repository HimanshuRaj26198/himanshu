import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {FormControl, FormGroup} from '@angular/forms' ;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  addUserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })


  constructor(private user:UserService) { }



  ngOnInit(): void {
  }

  collectUser(){
    this.user.addUser(this.addUserForm.value).subscribe(
    res=> {console.log('user added sucessfully')
           this.addUserForm.reset({})   },
    err=> console.log('error')
    )
  }

}
