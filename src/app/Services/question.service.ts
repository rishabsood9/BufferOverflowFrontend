import { Injectable } from '@angular/core';
import { Question } from '../Models/question.model';
import{HttpClient} from "@angular/common/http"



@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  formQuestionData : Question;
  list:Question[];
  
  
  readonly rootURL="http://localhost:60652/api"
  constructor(private http:HttpClient) { }
  postQuestion(username:String,Title:string,Description:string,tags:string,Date:Date){
    return  this.http.post(this.rootURL+'/Question', {username,Title,Description,tags,Date})
     }

     postQuestionWithImage(username:String,Title:string,Description:string,tags:string,Date:Date,image:string,name:string){
      return  this.http.post(this.rootURL+'/Question', {username,Title,Description,tags,Date,image,name} )
       }
  getQuestion(){
    return this.http.get(this.rootURL+'/getQuestions')
    
  }

  getYourQuestions(useremail:string){
    
    return this.http.get(this.rootURL+'/getYourQuestions?username='+useremail);
  }
  EditQuestion(questionId:Number){
    return this.http.get(this.rootURL+'/editQuestions?questionId='+questionId)
    
  }
  EditedQuestion(questionId:Number,Title:string,Description:string,tags:string){
    return this.http.post(this.rootURL+'/editedQuestions',{questionId,Title,Description,tags})
    
  }

  DeleteQuestion(questionId:Number){
    console.log(questionId);
    return this.http.post(this.rootURL+'/questionDelete',{questionId})
    
  }


}
