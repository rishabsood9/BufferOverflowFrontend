import { Component, OnInit } from '@angular/core';
import { Answer } from '../Models/answer.model';
import { AnswerService } from '../Services/answer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-your-answers',
  templateUrl: './your-answers.component.html',
  styleUrls: ['./your-answers.component.css']
})
export class YourAnswersComponent implements OnInit {
  answerList:any[];
  useremail:string;
  ques :string;
  constructor(private service:AnswerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() { this.useremail = window.sessionStorage.getItem('userEmail');
 
  this.refreshFrom();
  }
  refreshFrom(){
    this.service.getAnswersByUserID(this.useremail).subscribe(res => {
      
      this.answerList=res as any[]
      
      

    });
    this.service.getTitle().subscribe(res=>{
      this.ques =res as string;
    })
  

}
}
