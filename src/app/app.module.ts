import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Courses', component: CoursesComponent},
  {path:'Courses/Course/:id',component:CourseComponent},
  {path:'**',component:ErrorComponent}
  
]

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
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
