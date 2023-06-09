import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  getUserbyEmail(getData: any) {
    return this.http.get(this.apiUrl + '/?email=' + getData);
  }

  registerUser(postData: any) {
    return this.http.post(this.apiUrl, postData);
  }

  getAllUsers() {
    return this.http.get(this.apiUrl)
  }
}
