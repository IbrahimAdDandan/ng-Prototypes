import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username: string;

  constructor(private _router: Router) { }

  ngOnInit() {
    //this.username = localStorage.getItem('username') || 'Guest';
  }

  login() {
    localStorage.setItem('username', this.username);
    this._router.navigate(['/attendance']);
  }  

}
