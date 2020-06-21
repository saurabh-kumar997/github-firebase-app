import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit = (form: NgForm) => {
    const { email, password } = form.form.value;
    console.log(form);
    this.auth
      .signIn(email, password)
      .then((res) => {
        this.router.navigateByUrl('/home');
        this.toastr.success('Signin Successful');
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error('Email or Password is Incorrect');
      });
  };
}
