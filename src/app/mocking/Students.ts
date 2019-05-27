import {Student} from "../models/Student";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

let STUDENTS: Student[] = [
  new Student( 1, "Noble", "Simonis",38),
  // {id: 2, first_name:"Leopold", last_name: "Ledner", age: 75},
  // {id: 3, first_name:"Glenda", last_name: "Hirthe", age: 25},
  // {id: 4, first_name:"Glenna", last_name: "Schulist", age: 34},
  // {id: 5, first_name:"Melyssa", last_name: "Sporer", age: 67},
  // {id: 6, first_name:"Isabell", last_name: "Hill", age: 39},
  // {id: 7, first_name:"Nico", last_name: "Batz", age: 39},
  // {id: 8, first_name:"Celestine", last_name: "Rath", age: 79},
  // {id: 9, first_name:"Bulah", last_name: "Russel", age: 43},
  // {id: 10, first_name:"Jermain", last_name: "Mohr", age: 43},
  // {id: 11, first_name:"Doris", last_name: "Terry", age: 45},
  // {id: 12, first_name:"Ivy", last_name: "Gutkowski", age: 65},
  // {id: 13, first_name:"Mariane", last_name: "Turner", age: 67},
  // {id: 14, first_name:"Nikki", last_name: "Lemke", age: 35},
  // {id: 15, first_name:"Earl", last_name: "Conroy", age: 49},
  // {id: 16, first_name:"Dovie", last_name: "Becker", age: 58},
  // {id: 17, first_name:"Jaylen", last_name: "Wilkinson", age: 94},
  // {id: 18, first_name:"Nedra", last_name: "Smith", age: 44},
  // {id: 19, first_name:"Judd", last_name: "Adams", age: 98},
  // {id: 20, first_name:"Tina", last_name: "Feil", age: 35},
  // {id: 21, first_name:"Lamont", last_name: "Carter", age: 60},
  // {id: 22, first_name:"Josiane", last_name: "Kutch", age: 30},
  // {id: 23, first_name:"Marlene", last_name: "Block", age: 56},
  // {id: 24, first_name:"Ivah", last_name: "Berge", age: 89},
  // {id: 25, first_name:"Abbey", last_name: "Flatley", age: 28},
  // {id: 26, first_name:"Kade", last_name: "Bauch", age: 53},
  // {id: 27, first_name:"Lucas", last_name: "Pollich", age: 87},
  // {id: 28, first_name:"Caesar", last_name: "Lakin", age: 46},
  // {id: 29, first_name:"Owen", last_name: "Bergstrom", age: 62},
  // {id: 30, first_name:"Wilhelmine", last_name: "Price", age: 36},
  // {id: 31, first_name:"Benedict", last_name: "Gusikowski", age: 84},
  // {id: 32, first_name:"Marquis", last_name: "Kirlin", age: 50},
  // {id: 33, first_name:"Geo", last_name: "Kovacek", age: 21},
  // {id: 34, first_name:"Jasen", last_name: "Rodriguez", age: 96},
  // {id: 35, first_name:"Mittie", last_name: "Hintz", age: 92},
  // {id: 36, first_name:"Jettie", last_name: "Hahn", age: 58},
  // {id: 37, first_name:"Martin", last_name: "Parisian", age: 78},
  // {id: 38, first_name:"Roger", last_name: "Kuphal", age: 24},
  // {id: 39, first_name:"Mallory", last_name: "Wintheiser", age: 18},
  // {id: 40, first_name:"Fred", last_name: "Leuschke", age: 25},
  // {id: 41, first_name:"Hector", last_name: "Mayert", age: 89},
  // {id: 42, first_name:"Jared", last_name: "Schultz", age: 52},
  // {id: 43, first_name:"Else", last_name: "O'Hara", age: 56},
  // {id: 44, first_name:"Keagan", last_name: "Hills", age: 25},
  // {id: 45, first_name:"Ibrahim", last_name: "Cormier", age: 72},
  // {id: 46, first_name:"Javier", last_name: "Larkin", age: 63},
  // {id: 47, first_name:"Jarrell", last_name: "Murphy", age: 90},
  // {id: 48, first_name:"Deondre", last_name: "Balistreri", age: 45},
  // {id: 49, first_name:"Edythe", last_name: "Fadel", age: 29},
  // {id: 50, first_name:"Gaetano", last_name: "Baumbach", age: 25}
];

@Injectable()
export class StudentMock {

  visit: boolean = false;
  students: Student[] = [];


  constructor() {
    console.log("dsd");
    this.students = STUDENTS;

  }
  getStudents(): Observable<Student[]> {
    return of(this.students)
  }

  setStudents(students: Student[]) {
    this.students = students;
  }

  updateStudent(student: Student): Observable<any> {
    // console.log(this.students[1].first_name);
    this.students.forEach(student =>{
      if (_student.getId() === student.getId()) {
        _student.updateStudent(student)
      }
    });
    // this.setStudents(tempStudents);
    // tempStudents[0].updateData()
    // console.log(this.students[1].first_name);
    return of (true);
  }

  getStudent(id: number): Observable<Student> {
    let student = this.students.filter((student => student.getId() === id));

    return of(student[0]);
  }
}
