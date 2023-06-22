import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  formResetPassword = this.formBuilder.group({
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
  });

  onSubmit() {
    if (this.formResetPassword.valid) {
      //-----------------------
      // Put code to send email here
      //-----------------------
      this.toastr.success('Email sent. Please check and reset password');
    } else {
      this.toastr.warning('Please provide your email address');
    }
  }
}
