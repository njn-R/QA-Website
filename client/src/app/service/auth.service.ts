import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:3001/user';
  courseUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getUserbyEmail(getData: any) {
    return this.http.get(this.apiUrl + '/?email=' + getData);
  }

  getUserbyID(id: any) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  registerUser(postData: any) {
    return this.http.post(this.apiUrl, postData);
  }

  getAllUsers() {
    return this.http.get(this.apiUrl);
  }

  getAllCourses() {
    return this.http.get(this.courseUrl);
  }

  updateUser(id:any, postData: any) {
    return this.http.put(this.apiUrl + '/' + id, postData);
  }
}
