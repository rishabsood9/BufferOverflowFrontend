import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../Services/question.service';
import { Question } from '../Models/question.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-your-questions',
  templateUrl: './your-questions.component.html',
  styleUrls: ['./your-questions.component.css']
})
export class YourQuestionsComponent implements OnInit {
  list:Question[];
  userEmail:string;
  
  constructor(private service:QuestionService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.userEmail = window.sessionStorage.getItem('userEmail');
    this.refreshFrom();
  }
  
  
  refreshFrom(){
    this.service.getYourQuestions(this.userEmail).subscribe(res => {
      
      this.list=res as Question[]
    
      

    });
    
  

}

// onEdit(ques:Question){
  
//   this.router.navigate(['/questionedit'] )
  
 
  


// }

}
