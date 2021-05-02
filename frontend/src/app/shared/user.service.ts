import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser :  User = {
    name : '',
    email: '',
    password: ''
}


  constructor(private http: HttpClient, private router:Router) { }
root= 'http://localhost:3000/'
//root =  'https://obscure-waters-87437.herokuapp.com/'

url = this.root + 'users/add'
Loginurl = this.root  + 'users/login'

addUser(user: User){
  return this.http.post(this.url, user)
}

userLogin(user){
  return this.http.post<any>(this.Loginurl, user)
}


}
