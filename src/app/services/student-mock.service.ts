import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "../models/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentMockService {

  constructor() { }

  // getStudents(): Observable<Student[]> {
    // let students = getStudents();
    // return students;
  // }
}
