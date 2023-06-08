import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  formRegister = this.formBuilder.group({
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    name: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required]),
    role: this.formBuilder.control(''),
  });

  onSubmit() {
    if (this.formRegister.valid) {
      this.toastr.success('Registered Successfully');
    } 
      
     else {
      this.toastr.error('Please fill all the fields'); 
    }
  }
}
