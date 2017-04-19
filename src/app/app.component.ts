import { Component ,OnInit } from '@angular/core';
import { AppModel } from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Getting and Posting Data to Server in Angular 2 using Observable';
  description = "This application implement how to get data from and post data to backend server using Angular 2 framework";
  courses = [];
  errorMsg :string;
  errorFlag: boolean = false;
  defaultCourseCredit:string = "1";

  constructor(private appService:AppService ){
}
    fetchCourseData() {
    this.appService.getCourses()
     .subscribe(  
                  (data: AppModel[]) => {  this.courses = data; },
                 (error) =>  {this.errorMsg = error; this.errorFlag = true}
                )
            
    }


    addCourse(course: AppModel) {
    this.appService.createCourse(course)
                   .subscribe(
                              (course)  => {this.courses.push(course)},
                              (error) =>  {this.errorMsg = error}
                          
                     );
                
}
 
  ngOnInit(){
    this.fetchCourseData(); 
  }
  
}
