import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Student} from "../models/Student";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {StudentMock} from "../mocking/Students";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private mock: StudentMock) { }

  getStudents(): Observable<Student[]> {
    // return this.http.get<Student[]>(this.studentsUrl)
    //   .pipe(
    //     catchError(this.handleError<Student[]>('getStudents', []))
    //   );
    return this.mock.getStudents();
  }

  getStudent(id: number): Observable<Student> {
    // return this.http.get<Student[]>(`this.studentsUrl/${id}`)
    //   .pipe(
    //     catchError(this.handleError<Student[]>('getStudents', []))
    //   );

    return this.mock.getStudent(id);
  }

  updateStudent(student: Student): Observable<any> {
    // return this.http.put(`this.studentsUrl/${student.id}`, student)
    //   .pipe(
    //     catchError(this.handleError<any>('updateStudent'))
    //   );

    return this.mock.updateStudent(student);
  }

  addStudent(student: Student): Observable<any> {

    this.mock.addStudent(student);

    return of (true);
  }

  getLastId(): number {
    return  this.mock.getLastId();
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`StudentService: ${message}`);
  }
}
