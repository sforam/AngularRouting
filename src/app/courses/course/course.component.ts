import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit,OnDestroy {

  constructor(private activetedRoute:ActivatedRoute,private service:CoursesService,private router:Router) { }
    
  course:any;  
  courseId:any; 
  RouteParamObs:any;
  editMode:boolean=false;


  ngOnInit(): void {
  //  this.courseId = this.activetedRoute.snapshot.params['id'];
  //   this.course=this.service.courses.find( x => x.id == this.courseId);
   this.RouteParamObs= this.activetedRoute.paramMap.subscribe((param)=>{
      this.courseId = param.get('id');
      this.course=this.service.courses.find( x => x.id == this.courseId);
    })


    // this.editMode=Boolean(this.activetedRoute.snapshot.queryParamMap.get('edit'))

    this.activetedRoute.queryParamMap.subscribe((param)=>{
      this.editMode = Boolean(param.get('edit'));
    })

  } 
  ngOnDestroy(){
      this.RouteParamObs.unsubscribe();
  }

  appendQueryParam(){ 
    this.router.navigate(['/Courses/Course',this.courseId],{queryParams:{edit:true}})
  }

}
