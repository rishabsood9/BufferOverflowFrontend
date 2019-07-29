import { Component, OnInit } from '@angular/core';
import { Answer } from '../Models/answer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';
import { AnswerService } from '../Services/answer.service';
import { VoteService } from '../Services/vote.service';


@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  formAnswerData: Answer
  questionId: Number
  useremail: String
  answersList: any[]
  Date: Date
  userId: string
  answerId: number
  Ques:String;



  constructor(private router: Router, private route: ActivatedRoute,
    private service: AnswerService, private toastr: ToastrService, private vservive: VoteService) { }

  ngOnInit() {
    this.resetForm();
    this.userId = window.sessionStorage.getItem('userEmail');
    this.route.queryParams.subscribe(params => {
      this.questionId = params['Id'];
      this.Ques=params['qQ']
      
      this.useremail = window.sessionStorage.getItem('userEmail');
      this.Date =new Date();

    });

   this.refresh();
    // this.service.getAnswersById(this.questionId).subscribe(res => {
    //   this.answersList = res as any[];
    //   console.log(this.answersList);
    // }); console.log(this.answerId)
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formAnswerData = {
      answers: ''


    }
  }
  refresh() {

    this.service.getAnswersById(this.questionId).subscribe(res => {
      this.answersList = res as any[];
      
    });
   
    

  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
    
  }


  insertRecord(form: NgForm) {
    
    this.service.postAnswers(form.value.answers, this.questionId, this.useremail, this.Date,this.Ques)
      .subscribe(res => {
        this.toastr.success('Answer Added', '')
        this.refresh();
        this.resetForm(form)
      });
  }
  
  ondisLike(event) {

    this.answerId = event.target.dataset.sectionvalue
    this.vservive.postDVotes(this.userId, this.answerId).subscribe(res => {
      
      this.toastr.error('DISLIKED', '')
      this.refresh();
    }, err => {
      if (err.status == 400) {
        
        this.toastr.warning("ALREADY DISLIKED", '');
        this.refresh();
      }
    })
  }
  
  onLike(event) {

    this.answerId = event.target.dataset.sectionvalue
    this.vservive.postLVotes(this.userId, this.answerId).subscribe(res => {
      this.toastr.success('LIKED', '')
      this.refresh();
    }, err => {
      if (err.status == 400) {
        this.toastr.warning("ALREADY LIKED", '');
        this.refresh();
      }
    })






  }
}
