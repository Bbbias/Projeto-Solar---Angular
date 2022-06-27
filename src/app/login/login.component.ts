import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  login(validacao: NgForm){
    if(validacao.valid){
      this.router.navigate(['./dashboard']);
    }
  }
}
  

