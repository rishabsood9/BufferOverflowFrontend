import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login } from './Models/log-in.model';
import { UserComponent } from './user/user.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { RegisterComponent } from './user/register/register.component';
import { QuestionComponent } from './question/question.component';

import { HomeComponent } from './home/home.component';
import { UserGuardService } from './Services/user-guard.service';
import { AnswersComponent } from './answers/answers.component';
import { YourAnswersComponent } from './your-answers/your-answers.component';
import { YourQuestionsComponent } from './your-questions/your-questions.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { QuestionDeleteComponent } from './question-delete/question-delete.component';
import { AnswerEditComponent } from './answer-edit/answer-edit.component';
import { AnswerDeleteComponent } from './answer-delete/answer-delete.component';
import { UnautherizeAnswerComponent } from './unautherize-answer/unautherize-answer.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'uanswer',component:UnautherizeAnswerComponent},
{path:'user',canActivate: [UserGuardService], component:UserComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LogInComponent},
{path:'question',canActivate: [UserGuardService],component:QuestionComponent},
{path:'answer',canActivate: [UserGuardService],component:AnswersComponent},
{path:'youranswers',canActivate: [UserGuardService],component:YourAnswersComponent},
{path:'questionedit',canActivate: [UserGuardService],component:QuestionEditComponent},
{path:'questionDelete',canActivate: [UserGuardService],component:QuestionDeleteComponent},
{path:'getYourQuestions',canActivate: [UserGuardService],component:YourQuestionsComponent},
{path:'getYourAnswers',canActivate: [UserGuardService],component:YourAnswersComponent},
{path:'answeredit',canActivate: [UserGuardService],component:AnswerEditComponent},
{path:'answerdelete',canActivate: [UserGuardService],component:AnswerDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents =[LogInComponent,UserComponent,RegisterComponent,QuestionComponent] 