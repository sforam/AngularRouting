import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './courses/course/course.component';
import { FormsModule } from '@angular/forms';

import { ErrorComponent } from './error/error.component';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { CourseResolveService } from './course-reslove.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,

    CoursesComponent,
    HomeComponent,
    CourseComponent,
    ErrorComponent

  ],
  imports: [
    
    BrowserModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [CoursesService,CourseGuardService,AuthService,CanDeactivateGuardService,
    CourseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
