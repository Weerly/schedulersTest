import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GroupMock} from "../mocking/Groups";
import {Group} from "../models/Group";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient, private mock: GroupMock) { }

  getGroups(): Observable<Group[]> {
    // return this.http.get<Schedule[]>(this.schedulesUrl)
    //   .pipe(
    //     catchError(this.handleError<Schedule[]>('getSchedules', []))
    //   );
    return this.mock.getGroups();
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
