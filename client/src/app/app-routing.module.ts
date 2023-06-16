import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { QuestionAuthoringComponent } from './question-authoring/question-authoring.component';
import { CoursesComponent } from './courses/courses.component';
import { InterviewPrepComponent } from './interview-prep/interview-prep.component';
import { MockInterviewComponent } from './interview-prep/mock-interview/mock-interview.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'questions', component: QuestionAuthoringComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'prep', component: InterviewPrepComponent },
  { path: 'mock', component: MockInterviewComponent },
  { path: 'reset-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
