import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from "@angular/forms"
import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {Ng2SearchPipeModule} from 'ng2-search-filter'; 

//import {FilterPipeModule} from 'ngx-filter-pipe'

import { UserService } from './Services/user.service';
import{HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';


import { HomeComponent } from './home/home.component';

import { HomeheaderComponent } from './home/homeheader/homeheader.component';
import { AnswersComponent } from './answers/answers.component';
import { TableComponent } from './table/table.component';
import { QuestionService } from './Services/question.service';
import { AnswerService } from './Services/answer.service';
import { FilterPipe } from './filter.pipe';
import { VoteComponent } from './vote/vote.component';
import { VoteService } from './Services/vote.service';
import { YourQuestionsComponent } from './your-questions/your-questions.component';
import { YourAnswersComponent } from './your-answers/your-answers.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { QuestionDeleteComponent } from './question-delete/question-delete.component';
import { AnswerEditComponent } from './answer-edit/answer-edit.component';
import { AnswerDeleteComponent } from './answer-delete/answer-delete.component';
import { UnautherizeAnswerComponent } from './unautherize-answer/unautherize-answer.component';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HomeComponent,
    FilterPipe,
    HomeheaderComponent,
    AnswersComponent,
    TableComponent,
    VoteComponent,
    YourQuestionsComponent,
    YourAnswersComponent,
    QuestionEditComponent,
    QuestionDeleteComponent,
    AnswerEditComponent,
    AnswerDeleteComponent,
    UnautherizeAnswerComponent
    
  ],
  imports: [
    BrowserModule,
    
    //FilterPipeModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    FormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService,QuestionService,AnswerService,VoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
