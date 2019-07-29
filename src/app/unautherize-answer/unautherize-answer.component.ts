import { Component, OnInit } from '@angular/core';
import { Answer } from '../Models/answer.model';

import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnswerService } from '../Services/answer.service';
import { VoteService } from '../Services/vote.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-unautherize-answer',
  templateUrl: './unautherize-answer.component.html',
  styleUrls: ['./unautherize-answer.component.css']
})
export class UnautherizeAnswerComponent implements OnInit {

  formAnswerData: Answer
  questionId: Number
  useremail: String
  answersList: any[]
 questions:string
  answerId: number
  p: number = 1;

  constructor(private router: Router, private route: ActivatedRoute,
    private service: AnswerService, private toastr: ToastrService) { }
   

  ngOnInit() { 
    
    this.route.queryParams.subscribe(params => {
      this.questionId = params['Id'];
      this.useremail = window.sessionStorage.getItem('userEmail');
      this.questions=params['qQ']
      this.refresh();

    });

  } 
  refresh() {

    this.service.getAnswersById(this.questionId).subscribe(res => {
      this.answersList = res as any[];
      
    });
    

  }
}
