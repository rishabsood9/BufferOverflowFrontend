import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../Services/question.service';
import { Question } from '../Models/question.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
searchTerm:string;
list:Question[];

constructor(private service: QuestionService) { }
  refreshFrom(){
    this.service.getQuestion().subscribe(res => {
      this.list=res as Question[]

    })
  
  }
  
  ngOnInit() {
    this.refreshFrom();
  }
  ngOnChanges() {
    this.refreshFrom();
  }

}
