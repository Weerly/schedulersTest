import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Schedule} from "../models/Schedule";

export const SCHEDULES = [
  {id: 1, group_id: 15, group_title: "Dr.",  day: "2019-05-24T00:00:00. 000000" , time: "20:35:08"},
  {id: 2, group_id: 47, group_title: "Prof. ", day: "2019-05-24T00:00:0 0. 000000", time: "03:09:16"},
  {id: 3, group_id: 37, group_title: "Prof. ", day: "2019-05-24T00:00:0 0. 000000", time: "17:30:53"},
  {id: 4, group_id: 20, group_title: "Prof. ", day: "2019-05-24T00:00:0 0. 000000", time: "10:53:15"},
  {id: 5, group_id: 31, group_title: "Prof.", day: "2019-05-24T00:00:00.0 00000" , time: "04:31:14"},
  {id: 6, group_id: 14, group_title: "Prof.", day: "2019-05-24T00:00:00.0 00000" , time: "06:25:03"},
  {id: 7, group_id: 33, group_title: "Prof.", day: "2019-05-24T00:00:00. 000000" , time: "22:14:00"},
  {id: 8, group_id: 10, group_title: "Dr.", day: "2019-05-24T00:00:00.0 00000" , time: "12:54:05"},
  {id: 9, group_id: 9, group_title: "Dr.", day: "2019-05-24T00:00:00.0 00000" , time: "04:13:28"},
  {id: 10, group_id: 17, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "23:25:36"},
  {id: 11, group_id: 21, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "16:28:46"},
  {id: 12, group_id: 23, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "18:34:20"},
  {id: 13, group_id: 16, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "19:30:03"},
  {id: 14, group_id: 37, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "18:15:13"},
  {id: 15, group_id: 17, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "02:46:33"},
  {id: 16, group_id: 9, group_title: "Dr.", day: "2019-05-24T00:00:00.000000Z", time: "13:41:37"},
  {id: 17, group_id: 9, group_title: "Dr.", day: "2019-05-24T00:00:00.000000Z", time: "18:08:39"},
  {id: 18, group_id: 22, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "13:11:40"},
  {id: 19, group_id: 47, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "14:49:59"},
  {id: 20, group_id: 26, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "21:58:13"},
  {id: 21, group_id: 5, group_title: "Mr.", day: "2019-05-24T00:00:00.000000Z", time: "00:52:29"},
  {id: 22, group_id: 18, group_title: "Dr.", day: "2019-05-24T00:00:00.000000Z", time: "19:56:55"},
  {id: 23, group_id: 20, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "22:22:49"},
  {id: 24, group_id: 37, group_title: "Prof.", day: "2019-05-24T00:00:00.0 00000Z", time: "21:04:04"},
  {id: 25, group_id: 5, group_title: "Mr.", day: "2019-05-24T00:00:00.0 00000Z", time: "05:59:06"},
  {id: 26, group_id: 20, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "08:32:43"},
  {id: 27, group_id: 37, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "03:31:21"},
  {id: 28, group_id: 7, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "01:37:13"},
  {id: 29, group_id: 43, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "13:44:45"},
  {id: 30, group_id: 36, group_title: "Miss", day: "2019-05-24T00:00:00.000000Z", time: "21:55:24"},
  {id: 31, group_id: 25, group_title: "Dr.", day: "2019-05-24T00:00:00.000000Z", time: "02:06:12"},
  {id: 32, group_id: 29, group_title: "Mr.", day: "2019-05-24T00:00:00.000000Z", time: "00:25:04"},
  {id: 33, group_id: 6, group_title: "Dr.", day: "2019-05-24T00:00:00.000000Z", time: "22:53:25"},
  {id: 34, group_id: 3, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "23:25:00"},
  {id: 35, group_id: 38, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "18:28:54"},
  {id: 36, group_id: 13, group_title: "Miss", day: "2019-05-24T00:00:00.000000Z", time: "21:46:07"},
  {id: 37, group_id: 47, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "13:44:13"},
  {id: 38, group_id: 26, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "23:25:40"},
  {id: 39, group_id: 40, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "05:53:27"},
  {id: 40, group_id: 6, group_title: "Dr.", day: "2019-05-24T00:00:00.000000Z", time: "17:54:47"},
  {id: 41, group_id: 44, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "19:16:12"},
  {id: 42, group_id: 34, group_title: "Miss", day: "2019-05-24T00:00:00.000000Z", time: "20:58:57"},
  {id: 43, group_id: 18, group_title: "Dr.", day: "2019-05-24T00:00:00.000000Z", time: "11:49:35"},
  {id: 44, group_id: 24, group_title: "Mr.", day: "2019-05-24T00:00:00.000000Z", time: "14:17:20"},
  {id: 45, group_id: 24, group_title: "Mr.", day: "2019-05-24T00:00:00.000000Z", time: "17:57:18"},
  {id: 46, group_id: 21, group_title: "Prof.", day: "2019-05-24T00:00:00.000000Z", time: "02:40:07"},
  {id: 47, group_id: 18, group_title: "Dr.", day: "2019-05-24T00:00:00.000000Z", time: "08:15:31"},
  {id: 48, group_id: 13, group_title: "Miss", day: "2019-05-24T00:00:00.000000Z", time: "20:55:57"},
  {id: 49, group_id: 45, group_title: "Miss", day: "2019-05-24T00:00:00.000000Z", time: "12:31:10"},
  {id: 50, group_id: 13, group_title: "Miss", day: "2019-05-24T00:00:00.000000Z", time: "15:23:16"}
];


@Injectable()
export class ScheduleMock {

  schedules: Schedule[];
  constructor() {
    this.schedules = SCHEDULES;
  }

  getSchedules(): Observable<Schedule[]> {
    return of(this.schedules);
  }
}
