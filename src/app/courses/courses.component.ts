import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  
  constructor(private courseService: CoursesService) { }

  courses!: any[];  // Non-null assertion operator

  ngOnInit(): void {
    this.courses = this.courseService.courses;
  }

}
