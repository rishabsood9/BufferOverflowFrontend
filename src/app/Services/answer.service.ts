import { Injectable } from '@angular/core';
import { Answer } from '../Models/answer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  formAnswerData : Answer;
  list:any[];
  

  readonly rootURL="http://localhost:60652/api"
  constructor(private http:HttpClient) { }

  postAnswers(answers: string,QuestionId : Number,useremail:String,Date:Date,Ques:String){
    return  this.http.post(this.rootURL+'/Answer', {answers,QuestionId,useremail,Date,Ques})
     }
      
   

    getAnswersById(QuestionId){
      return this.http.get(this.rootURL+'/getAnswers?QuestionId='+QuestionId); 
    }

    getAnswersByUserID(useremail){
      return this.http.get(this.rootURL+'/getYourAnswers?username='+useremail);
    }
    EditAnswer(AnswerId:Number){
      return this.http.get(this.rootURL+'/editAnswers?AnswerId='+AnswerId)
      
    }
    EditedAnswer(answers:Number,AnswerId:Number){
      return this.http.post(this.rootURL+'/editedAnswers',{answers,AnswerId})
      
    }
    DeleteAnswer(answerId:Number,QuestionId){
      //console.log(questionId);
      return this.http.post(this.rootURL+'/answerdelete',{answerId,QuestionId})
      
    }
    getTitle(){
      return this.http.get(this.rootURL+'/getTitle')
    }
}
