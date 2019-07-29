import { Component, OnInit, ViewChild } from '@angular/core';
import{Router,ActivatedRoute}from '@angular/router'
import { TableComponent } from '../table/table.component';
import { Question } from '../Models/question.model';
import { QuestionService } from '../Services/question.service';
import { UserService } from '../Services/user.service';
import { Register } from '../Models/register.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchTerm:string;
  email:string
  list:Question[];
  user:Register;
  userDefined=false;
  constructor(private uservice:UserService,private router:Router,private route:ActivatedRoute,private service: QuestionService) { }
  //@ViewChild('table',{ read: true, static: false }) private table:TableComponent;
  ngOnInit() {
    this.email=window.sessionStorage.getItem('userEmail');
    this.userData();
    this.refreshFrom();
    
    
  }
  ngOnChanges()
  {
    this.refreshFrom();
  }
  refreshFrom(){
    this.service.getQuestion().subscribe(res => {
      this.list=res as Question[]

    })
  
  }
  userData(){
    this.uservice.getUser(this.email).subscribe(res=>{
      this.user=res as any
      this.userDefined=true;

    })
  }

onClick(){

window.sessionStorage.removeItem('userEmail'); 
}


onSubmit(){
  this.router.navigate(['question'],{relativeTo:this.route})
}
}
