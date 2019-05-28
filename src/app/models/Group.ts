export  class Group {
  id: number;
  title: string;
  schedules: Array<Schedule>;
}

class Schedule {
  day: string;
  time: string;
}
