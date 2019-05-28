import {Group} from "../models/Group";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";


const GROUPS: Group[] = [
  {id: 2, title: "Mrs.", schedules: [{day: "2019-05-24T00:00:00. 000000" , time: "20:35:08"},
      {day: "2019-05-24T00:00:0 0. 000000", time: "03:09:16"},
      {day: "2019-05-24T00:00:0 0. 000000", time: "17:30:53"}]},
  {id: 3, title: "Prof.", schedules: []},
  {id: 4, title: "Prof.", schedules: [
      {day: "2019-05-24T00:00:0 0. 000000", time: "10:53:15"},
      {day: "2019-05-24T00:00:00.0 00000" , time: "04:31:14"}]},
  {id: 5, title: "Mr.", schedules: []},
  {id: 6, title: "Dr.", schedules: []},
  {id: 7, title: "Prof.", schedules: []},
  {id: 8, title: "Dr.", schedules: []},
  {id: 9, title: "Dr.", schedules: []},
  {id: 10, title: "Dr.", schedules: []},
  {id: 11, title: "Mr.", schedules: []},
  {id: 12, title: "Dr.", schedules: []},
  {id: 13, title: "Miss", schedules: []},
  {id: 14, title: "Prof.", schedules: []},
  {id: 15, title: "Dr.", schedules: []},
  {id: 16, title: "Prof.", schedules: []},
  {id: 17, title: "Prof.", schedules: []},
  {id: 18, title: "Dr.", schedules: []},
  {id: 19, title: "Mr.", schedules: []},
  {id: 20, title: "Prof.", schedules: []},
  {id: 21, title: "Prof.", schedules: []},
  {id: 22, title: "Prof.", schedules: []},
  {id: 23, title: "Prof.", schedules: []},
  {id: 24, title: "Mr.", schedules: []},
  {id: 25, title: "Dr.", schedules: []},
  {id: 26, title: "Prof.", schedules: []},
  {id: 27, title: "Ms.", schedules: []},
  {id: 28, title: "Mrs.", schedules: []},
  {id: 29, title: "Mr.", schedules: []},
  {id: 30, title: "Mr.", schedules: []},
  {id: 31, title: "Prof.", schedules: []},
  {id: 32, title: "Miss", schedules: []},
  {id: 33, title: "Prof.", schedules: []},
  {id: 34, title: "Miss", schedules: []},
  {id: 35, title: "Prof.", schedules: []},
  {id: 36, title: "Miss", schedules: []},
  {id: 37, title: "Prof.", schedules: []},
  {id: 38, title: "Prof.", schedules: []},
  {id: 39, title: "Prof.", schedules: []},
  {id: 40, title: "Prof.", schedules: []},
  {id: 41, title: "Dr.", schedules: []},
  {id: 42, title: "Dr.", schedules: []},
  {id: 43, title: "Prof.", schedules: []},
  {id: 44, title: "Prof.", schedules: []},
  {id: 45, title: "Miss", schedules: []},
  {id: 46, title: "Mrs.", schedules: []},
  {id: 47, title: "Prof.", schedules: []},
  {id: 48, title: "Mr.", schedules: []},
  {id: 49, title: "Mr.", schedules: []},
  {id: 50, title: "Prof.", schedules: [
      {day: "2019-05-24T00:00:00.000000Z", time: "16:28:46"},
      {day: "2019-05-24T00:00:00.000000Z", time: "18:34:20"},
      {day: "2019-05-24T00:00:00.000000Z", time: "13:41:37"}]}
];

@Injectable()
export class GroupMock {

  groups: Group[];
  constructor() {
    this.groups = GROUPS;
  }

  getGroups(): Observable<Group[]> {
    return of(this.groups);
  }
};
