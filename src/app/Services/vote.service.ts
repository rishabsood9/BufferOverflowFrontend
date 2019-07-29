import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http:HttpClient) { }
  readonly rootURL="http://localhost:60652/api"



  postLVotes(userId:string,answerId:number){
    return  this.http.post(this.rootURL+'/Vote', {userId,answerId})
     }
     postDVotes(userId:string,answerId:number){
      return  this.http.post(this.rootURL+'/DVotes', {userId,answerId})
       }
      
}
