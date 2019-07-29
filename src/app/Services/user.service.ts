import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { Register } from '../Models/register.model';
import { Login } from '../Models/log-in.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
formData :Register;
formLoginData:Login;


readonly rootURL="http://localhost:60652/api"
  constructor(private http:HttpClient) { }

  postUser(user:Register,image:string,name:string){
 return  this.http.post(this.rootURL+'/User/PostUser', {user,image,name});
  }
  validateData(form:Login){
    return  this.http.post(this.rootURL+'/Login',form)}
    getUser(email:string){
      return this.http.get(this.rootURL+'/user?email='+email)
    }

}