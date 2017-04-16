import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions,Headers } from '@angular/http';
import { AppModel } from './app.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AppService {
endpointUrl ="http://localhost:3000/courses";  


  constructor(private http:Http) { 
    this.getCourses();
  }
  
   getCourses(): Observable<AppModel[]> {

    return this.http.get(this.endpointUrl )
                    .map((response: Response) => {
                      const result = response.json();
                      return result;
                    })
                    .catch((error : Response | any) => {
                       console.log(error.statusText);
                       return Observable.throw(error.statusText);
                    });
  }

  createCourse(obj:{}): Observable<AppModel> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.endpointUrl, obj , options)
                     .map((response: Response) => {
                      const result = response.json();
                      return result;
                    })
                    .catch((error : Response | any) => {
                       console.log(error.statusText);
                       return Observable.throw(error);
                    });
  }

}
