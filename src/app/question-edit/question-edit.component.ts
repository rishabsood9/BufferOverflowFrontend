import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../Services/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../Models/question.model';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Toast } from 'ngx-toastr';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
questionId:Number
Form:Question
  constructor(private service:QuestionService,private route :ActivatedRoute,private router:Router) { }

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
  }
  onSubmition(form:NgForm){
    this.insertRecord(form)
if(window.sessionStorage.getItem('userEmail')!==null){
this.router.navigate(['/user'] ,{relativeTo:this.route}).then(() => window.location.reload())}

}
insertRecord(form:NgForm){
  this.service.EditedQuestion(this.questionId,form.value.Title,form.value.Description,form.value.tags).subscribe(res=>{
   
    
    this.resetForm(form)
});
}


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.Form = {
      Title:  '',
      Description:'',
      tags:''


   }
  }

}
