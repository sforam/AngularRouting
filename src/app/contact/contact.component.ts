import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from '../candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,IDeactivateComponent {

  firstname:any;
  lastname:any;
  country:any;
  subject:any;
  constructor() { }

  ngOnInit(): void {
  }
  canExit(){
    if(this.firstname || this.lastname || this.subject || this.country){
      return confirm('You have unsaved changes.Do you really want to discard these change?');
    }else{
      return true;
    }
  }

}
