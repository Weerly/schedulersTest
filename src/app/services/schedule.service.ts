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

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private schedulesUrl = 'http://173.212.246.114:8027/api/schedules';

  constructor(private http: HttpClient, private mock: ScheduleMock) { }

  getSchedules(): Observable<Schedule[]> {
    // return this.http.get<Schedule[]>(this.schedulesUrl)
    //   .pipe(
    //     catchError(this.handleError<Schedule[]>('getSchedules', []))
    //   );
    return this.mock.getSchedules();
  }

  getSchedule(id: number): Observable<Schedule> {
    // return this.http.get<Schedule[]>(`this.schedulesUrl/${id}`)
    //   .pipe(
    //     catchError(this.handleError<Schedule[]>('getSchedules', []))
    //   );

    return this.mock.getSchedule(id);
  }

  updateSchedule(schedule: Schedule) :Observable<any> {
    // return this.http.put(`this.schedulesUrl/${schedule.id}`, schedule)
    //   .pipe(
    //     catchError(this.handleError<any>('updateSchedule'))
    //   );

    return this.mock.updateSchedule(schedule);
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
