import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  
  constructor(private courseService: CoursesService,private route:ActivatedRoute) { }

  courses!: any[];  // Non-null assertion operator

  ngOnInit(): void {
   // this.courses = this.courseService.courses;
    // this.courseService.getAllCourse().then((data:any)=>{
    //   this.courses = data;
    // })

    this.courses=this.route.snapshot.data['courses'];

  }

}
