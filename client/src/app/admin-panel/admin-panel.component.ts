import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent {
  constructor(private service: AuthService) {
    this.getAllUsers();
  }

  userList: any;
  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((res) => {
      this.userList = res;
    });
  }
}