import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit = (form: NgForm) => {
    const { email, password } = form.form.value;
    this.auth
      .signUp(email, password)
      .then((res) => {
        this.router.navigateByUrl('/signup');
        this.toastr.success('Signup Successful');
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error(err.message);
      });
  };
}
