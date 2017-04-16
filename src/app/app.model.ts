
export class AppModel {
  id:number;
  courseTitle:string;
  courseDescription:string;
  ourseCredit:number;
  
  constructor(id:number,courseTitle:string, courseDescription:string, ourseCredit:number) { 
    this.id = id;
    this.courseTitle = courseTitle;
    this.courseDescription = courseDescription;
    this.ourseCredit  = ourseCredit;
}
}
