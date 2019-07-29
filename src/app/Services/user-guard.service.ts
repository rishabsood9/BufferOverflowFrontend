import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserGuardService {


  constructor( private router: ActivatedRoute,
    private route: Router) { }
    
    canActivate(): boolean {
    if (window.sessionStorage.getItem('userEmail') === null ) {
    window.alert('You don\'t have permission to view this page.You Need To Log In');
    window.sessionStorage.clear();
    this.route.navigate(['']);
    return false;
    } else {
    return true;
    }
    }
}



