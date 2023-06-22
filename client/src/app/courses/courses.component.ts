import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courseData: any = '';
  constructor(private service: AuthService, private toastr: ToastrService) {}

  ngOnInit() {
    this.service.getAllCourses().subscribe((data) => {
      this.courseData = data;
    });
  }

  getRoundedRatings(rating: number): number[] {
    const roundedRatings: number[] = [];
    const roundedValue = Math.floor(rating);

    for (let i = 0; i < roundedValue; i++) {
      roundedRatings.push(roundedValue);
    }

    return roundedRatings;
  }

  onSubmit(course: any) {
    this.service.postToCart(course).subscribe((res) => {
      this.toastr.success('Added to cart');
    });
  }
}
