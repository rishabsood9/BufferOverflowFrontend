import { Component, OnInit } from '@angular/core';
import { Answer } from '../Models/answer.model';
import { ActivatedRoute,  Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { AnswerService } from '../Services/answer.service';

@Component({
  selector: 'app-answer-delete',
  templateUrl: './answer-delete.component.html',
  styleUrls: ['./answer-delete.component.css']
})
export class AnswerDeleteComponent implements OnInit {
  answerId:Number
  Form:Answer
  QuestionId:Number
  constructor(private route :ActivatedRoute,private service:AnswerService,private router:Router) { }


   ngOnInit() { 
    
    this.resetForm()
    this.route.queryParams.subscribe(params => {
      this.answerId = params['Id'];
    this.QuestionId=params['qId']})
    console.log(this.QuestionId+'hi')
      this.service.EditAnswer(this.answerId).subscribe(res=>{
        this.Form=res[0];
        // console.log(this.Form.Title);
        // console.log(this.Form.tags);
        // console.log(this.Form.Description);
      }) 
}resetForm(form?: NgForm) {
  if (form != null)
    form.resetForm();
  this.Form = {
    answers:  ''
    

 }
}onYes(){
  this.insertRecord()
  if(window.sessionStorage.getItem('userEmail')!==null){
  this.router.navigate(['/user'] ,{relativeTo:this.route}).then(() => window.location.reload())}
  
}
insertRecord(){
  //console.log(this.answerId);
  this.service.DeleteAnswer(this.answerId,this.QuestionId).subscribe(res=>{
    console.log(this.answerId)
  });
    
   
}
onNo(){if(window.sessionStorage.getItem('userEmail')!==null){
  this.router.navigate(['/user'] ,{relativeTo:this.route}).then(() => window.location.reload())}
  

}

  
  }




