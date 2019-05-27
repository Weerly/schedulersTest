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

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private studentsUrl = 'http://173.212.246.114:8027/api/students';

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

  updateStudent(student: Student) :Observable<any> {
    // return this.http.put(`this.studentsUrl/${student.id}`, student)
    //   .pipe(
    //     catchError(this.handleError<any>('updateStudent'))
    //   );

    return this.mock.updateStudent(student);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
