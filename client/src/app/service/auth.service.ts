import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userUrl = 'http://localhost:3001/user';
  courseUrl = 'http://localhost:3000/courses';
  questionUrl = 'http://localhost:3002/questions';

  constructor(private http: HttpClient) {}

  // User API
  getUserbyEmail(getData: any) {
    return this.http.get(this.userUrl + '/?email=' + getData);
  }

  getUserbyID(id: any) {
    return this.http.get(this.userUrl + '/' + id);
  }

  registerUser(postData: any) {
    return this.http.post(this.userUrl, postData);
  }

  getAllUsers() {
    return this.http.get(this.userUrl);
  }

  updateUser(id: any, postData: any) {
    return this.http.put(this.userUrl + '/' + id, postData);
  }

  // Course API
  getAllCourses() {
    return this.http.get(this.courseUrl);
  }

  // Question API
  postQuestion(postData: any) {
    return this.http.post(this.questionUrl, postData);
  }

  getAllQuestions() {
    return this.http.get(this.questionUrl);
  }
}
