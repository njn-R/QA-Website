import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
//   role: string;
// }

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent {
  constructor(
    private service: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  formUpdate = this.formBuilder.group({
    id: this.formBuilder.control('', [Validators.required]),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    name: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required]),
    role: this.formBuilder.control('', [Validators.required]),
  });

  userList: any;
  roleList = ['Candidate','Interviewer', 'Question Author'];
  showModal = false;
  // userRole!: string;

  editUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    this.formUpdate.setValue({
      id: id,
      name: name,
      email: email,
      password: password,
      role: role,
    });
    // this.roleList = this.userList.map((user: User) => user.role);
    // console.log(this.roleList);
    
    this.toggleModal();
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((res) => {
      this.userList = res;
    });
  }

  onSubmit() {
    this.toggleModal();
    if (this.formUpdate.valid) {
      this.service
        .updateUser(this.formUpdate.value.id, this.formUpdate.value)
        .subscribe((res) => {
          this.toastr.success('User updated successfully');
          this.getAllUsers();
          console.log(this.formUpdate.value);
        });
    } else {
      this.toastr.error('Please fill all the fields');
    }
  }
}
