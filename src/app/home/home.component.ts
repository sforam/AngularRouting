import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses!: any[]; 
  constructor(private courseService:CoursesService) { }

 
  ngOnInit(): void {
  this.courses=this.courseService.courses;
  }


}
