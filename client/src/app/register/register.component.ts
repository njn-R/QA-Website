import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router:Router
  ) {}

  formRegister = this.formBuilder.group({
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    name: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required]),
    role: this.formBuilder.control('Candidate'),
  });

  onSubmit() {
    if (this.formRegister.valid) {
        this.service.registerUser(this.formRegister.value).subscribe(res => {
        this.toastr.success('Registered Successfully');
        this.router.navigate(['login']);
      })
    } 
      
     else {
      this.toastr.error('Please fill all the fields'); 
    }
  }
}
