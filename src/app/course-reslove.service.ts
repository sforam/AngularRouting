import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./Services/courses.service";
import { Injectable } from "@angular/core";


@Injectable()
export class CourseResolveService implements Resolve<any>{
    
    constructor(private courseService:CoursesService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            return this.courseService.getAllCourse().then((data:any)=>{
                return data;
        })
    }
}