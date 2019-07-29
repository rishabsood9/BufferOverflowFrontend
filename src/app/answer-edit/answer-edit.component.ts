import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from '../Models/answer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from '../Services/answer.service';

@Component({
  selector: 'app-answer-edit',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.css']
})
export class AnswerEditComponent implements OnInit {
Form:Answer
AnswerId:Number
  constructor(private route:ActivatedRoute,private router:Router,private service:AnswerService) { }

  ngOnInit() {



    this.resetForm()
    this.route.queryParams.subscribe(params => {
      this.AnswerId = params['Id'];})
      this.service.EditAnswer(this.AnswerId).subscribe(res=>{
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
  }onSubmit(form:NgForm){
    this.insertRecord(form)
if(window.sessionStorage.getItem('userEmail')!==null){
this.router.navigate(['/user'] ,{relativeTo:this.route}).then(() => window.location.reload())}

}

insertRecord(form:NgForm){
  this.service.EditedAnswer(form.value.answers,this.AnswerId).subscribe(res=>{
   
    
    this.resetForm(form)
});
}

}
