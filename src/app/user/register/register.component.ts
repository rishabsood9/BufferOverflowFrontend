import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import{Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:UserService,private toastr:ToastrService,private router:Router,private route:ActivatedRoute) { }
  pwdPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
firstnamelastnamepattern = '^[a-zA-Z ]*$'; 
imageUrl = '/assets/Images/DP.jpg';

fileToUpload: File = null;
binaryString: string;
display = false;
base64textString: string; 
  ngOnInit() {
   
    this.resetForm();

  }
resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.service.formData={
    FullName:'',
    email:'',
    Password:'',
    ProfileImage:''
  }
}

onSubmit(form : NgForm){

  if(this.fileToUpload==null)
  {
    alert('You need to upload an image');
  }
  else{
    if(this.fileToUpload.type==='image/jpeg'|| this.fileToUpload.type==='image/png')
    {
      this.insertRecord(form,this.binaryString,this.fileToUpload.name);
    }
    else{
      alert('Image Format Must Be jpeg or png');
    }
  }


}



insertRecord(form:NgForm,binaryString:string,name:string){
  this.service.postUser(form.value,binaryString,name).subscribe(res=>{
    this.toastr.success('Registered Sucessfully','USER REGISTERED')
    window.sessionStorage.setItem('userEmail', form.value.email);
    this.router.navigate(['user'])

},err=>{if(err.status==400){
  this.toastr.error("Email Already Exits",'Authentication failed');
  }});
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



  

 

