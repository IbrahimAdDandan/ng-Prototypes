import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.sass']
})
export class Login1Component implements OnInit {

  username: string;

  constructor(private _router: Router) { }

  ngOnInit() {
  }


  login() {
    localStorage.setItem('username', this.username);
    this._router.navigate(['/attendance']);
  }  

}
