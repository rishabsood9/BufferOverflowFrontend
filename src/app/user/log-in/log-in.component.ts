import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private service:UserService, private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.service.formLoginData={
    email:'',
    Password:''
     }
}

onSubmit(form : NgForm){

 
this.insertRecord(form)
}



insertRecord(form:NgForm){
this.service.validateData(form.value).subscribe((res:any)=>{
  localStorage.setItem('token',res.token);
  this.router.navigate(['user']);
  window.sessionStorage.setItem('userEmail', form.value.email); 

  
}
, err=>{if(err.status==400){
this.toastr.error("incorrect username or password",'Authentication failed');
}})
}


}

