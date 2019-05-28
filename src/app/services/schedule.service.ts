import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Schedule} from "../models/Schedule";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {ScheduleMock} from "../mocking/Schedules";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient, private mock: ScheduleMock) { }

  getSchedules(): Observable<Schedule[]> {
    // return this.http.get<Schedule[]>(this.schedulesUrl)
    //   .pipe(
    //     catchError(this.handleError<Schedule[]>('getSchedules', []))
    //   );
    return this.mock.getSchedules();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`ScheduleService: ${message}`);
  }
}
