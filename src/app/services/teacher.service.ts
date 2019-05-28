import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Teacher} from "../models/Teacher";
import {TeacherMock} from "../mocking/Teachers";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient, private mock: TeacherMock) { }

  getTeachers(): Observable<Teacher[]> {
    // return this.http.get<Student[]>(this.studentsUrl)
    //   .pipe(
    //     catchError(this.handleError<Student[]>('getStudents', []))
    //   );
    return this.mock.getTeachers();
  }

  getTeacher(id: number): Observable<Teacher> {
    // return this.http.get<Student[]>(`this.studentsUrl/${id}`)
    //   .pipe(
    //     catchError(this.handleError<Student[]>('getStudents', []))
    //   );

    return this.mock.getTeacher(id);
  }

  updateTeacher(teacher: Teacher): Observable<any> {
    // return this.http.put(`this.studentsUrl/${student.id}`, student)
    //   .pipe(
    //     catchError(this.handleError<any>('updateStudent'))
    //   );

    return this.mock.updateTeacher(teacher);
  }

  getLastId(): number {
    return  this.mock.getLastId();
  }

  addTeacher(teacher: Teacher) : Observable<any> {

    this.mock.addTeacher(teacher);

    return of (true);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`TeacherService: ${message}`);
  }
}
