import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionService} from 'src/app/Services/question.service';
import {Route,ActivatedRoute, Router}from '@angular/router'
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  username:String
  Date:Date

  imageUrl = '/assets/Images/OK.jpg';

fileToUpload: File = null;
binaryString: string;
display = false;
base64textString: string; 
  

  constructor(private router:Router,private route:ActivatedRoute, 
    private service:QuestionService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.username=window.sessionStorage.getItem('userEmail');
    this.Date=new Date()
   
}
resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.service.formQuestionData={
   Title:'',
    Description:'',
    tags:''
  }
}

onSubmit(form : NgForm){

this.insertRecord(form)
if(window.sessionStorage.getItem('userEmail')!==null){
this.router.navigate(['/user'] ,{relativeTo:this.route}).then(() => window.location.reload())}

}
insertRecord(form:NgForm){
  if(this.binaryString && this.fileToUpload)
  {
    console.log("inside ");
  this.service.postQuestionWithImage(this.username,form.value.Title,form.value.Description,form.value.tags,this.Date,this.binaryString,this.fileToUpload.name).subscribe(res=>{
    this.toastr.success('Qusetion Added','')
    
    this.resetForm(form)
});
  }
  else{
   
    this.service.postQuestion(this.username,form.value.Title,form.value.Description,form.value.tags,this.Date).subscribe(res=>{
      this.toastr.success('Qusetion Added','')
      
      this.resetForm(form)
  });
  }
}


onImageUpload(evt: any) {
  this.display = true;
  this.fileToUpload = evt.target.files[0];
  const reader = new FileReader();
  reader.onload = (event: any) => {
  
  this.binaryString = btoa(event.target.result);
  this.base64textString = 'data:image/jpeg;base64,' + btoa(event.target.result);
  
  };
  reader.readAsBinaryString(this.fileToUpload);
  } 
}
