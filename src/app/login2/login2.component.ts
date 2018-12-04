import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.sass']
})
export class Login2Component implements OnInit {

  username: string;
  
  constructor(private _router: Router) { }

  ngOnInit() {
  }


  login() {
    localStorage.setItem('username', this.username);
    this._router.navigate(['/attendance']);
  }  

}
