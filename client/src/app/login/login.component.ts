import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData:any = ''
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  formLogin = this.formBuilder.group({
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this.formBuilder.control('', Validators.required),
  });

  onSubmit() {
    if (this.formLogin.valid) {
      this.service.getUserbyEmail(this.formLogin.value.email).subscribe(res => {
        this.userData = res

        if (this.userData[0].password === this.formLogin.value.password) {
          sessionStorage.setItem('email', this.userData[0].email);
          sessionStorage.setItem('role', this.userData[0].role);
          this.toastr.success('Login Successful');
          this.router.navigate(['']);
        } else {
          this.toastr.error('Invalid credentials');
        }
        
       })
    }
  }
}
