import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  courseUrl = 'http://localhost:3000/courses';
  userUrl = ' http://localhost:5000/api/users/register';
  questionUrl = 'http://localhost:3002/questions';
  cartUrl = 'http://localhost:3003/cart';

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

  deleteUser(id: any) {
    return this.http.delete(this.userUrl + '/' + id);
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

  //Cart API
  postToCart(postData: any) {
    return this.http.post(this.cartUrl, postData);
  }

  getAllCartItems() {
    return this.http.get(this.cartUrl);
  }

  deleteCartItem(id: any) {
    return this.http.delete(this.cartUrl + '/' + id);
  }
}
