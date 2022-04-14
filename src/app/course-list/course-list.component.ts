import { ContentfulService } from './../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Entry<any>[] = [];
  constructor(private router: Router, private conetentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.conetentfulService.getCourses()
      .then((courses: any) => this.courses = courses);
  }

  goToCourseDetailsPage(courseId: any) {
    this.router.navigate(['/course'], courseId);
  }
}
