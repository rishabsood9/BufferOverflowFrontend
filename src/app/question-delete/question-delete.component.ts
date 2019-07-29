import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../Services/question.service';
import { Question } from '../Models/question.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-question-delete',
  templateUrl: './question-delete.component.html',
  styleUrls: ['./question-delete.component.css']
})
export class QuestionDeleteComponent implements OnInit {
  questionId:Number
  Form:Question
  constructor(private route :ActivatedRoute,private service:QuestionService,private router:Router) { }

  ngOnInit() {


    
    this.resetForm()
    this.route.queryParams.subscribe(params => {
      this.questionId = params['Id'];})
      this.service.EditQuestion(this.questionId).subscribe(res=>{
        this.Form=res[0];
        // console.log(this.Form.Title);
        // console.log(this.Form.tags);
        // console.log(this.Form.Description);
      })  
  }  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.Form = {
      Title:  '',
      Description:'',
      tags:''


   }
  }

onYes(){
  this.insertRecord()
  if(window.sessionStorage.getItem('userEmail')!==null){
  this.router.navigate(['/user'] ,{relativeTo:this.route}).then(() => window.location.reload())}
  
}
insertRecord(){
  console.log(this.questionId);
  this.service.DeleteQuestion(this.questionId).subscribe(res=>{
    console.log(this.questionId)
  });
    
   
}
onNo(){if(window.sessionStorage.getItem('userEmail')!==null){
  this.router.navigate(['/user'] ,{relativeTo:this.route}).then(() => window.location.reload())}
  

}

  
  }


