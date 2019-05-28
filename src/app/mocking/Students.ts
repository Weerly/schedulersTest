import {Student} from "../models/Student";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

const STUDENTS: Student[] = [
  new Student( 1, "Noble", "Simonis", 38),
  new Student(2, "Leopold", "Ledner", 75),
  new Student(3, "Glenda", "Hirthe", 25),
  new Student(4, "Glenna", "Schulist", 34),
  new Student(5, "Melyssa", "Sporer", 67),
  new Student(6, "Isabell", "Hill", 39),
  new Student(7, "Nico", "Batz", 39),
  new Student(8, "Celestine", "Rath", 79),
  new Student(9, "Bulah", "Russel", 43),
  new Student(10, "Jermain", "Mohr", 43),
  new Student(11, "Doris", "Terry", 45),
  new Student(12, "Ivy", "Gutkowski", 65),
  new Student(13, "Mariane", "Turner", 67),
  new Student(14, "Nikki", "Lemke", 35),
  new Student(15, "Earl", "Conroy", 49),
  new Student(16, "Dovie", "Becker", 58),
  new Student(17, "Jaylen", "Wilkinson", 94),
  new Student(18, "Nedra", "Smith", 44),
  new Student(19, "Judd", "Adams", 98),
  new Student(20, "Tina", "Feil", 35),
  new Student(21, "Lamont", "Carter", 60),
  new Student(22, "Josiane", "Kutch", 30),
  new Student(23, "Marlene", "Block", 56),
  new Student(24, "Ivah", "Berge", 89),
  new Student(25, "Abbey", "Flatley", 28),
  new Student(26, "Kade", "Bauch", 53),
  new Student(27, "Lucas", "Pollich", 87),
  new Student(28, "Caesar", "Lakin", 46),
  new Student(29, "Owen", "Bergstrom", 62),
  new Student(30, "Wilhelmine", "Price", 36),
  new Student(31, "Benedict", "Gusikowski", 84),
  new Student(32, "Marquis", "Kirlin", 50),
  new Student(33, "Geo", "Kovacek", 21),
  new Student(34, "Jasen", "Rodriguez", 96),
  new Student(35, "Mittie", "Hintz", 92),
  new Student(36, "Jettie", "Hahn", 58),
  new Student(37, "Martin", "Parisian", 78),
  new Student(38, "Roger", "Kuphal", 24),
  new Student(39, "Mallory", "Wintheiser", 18),
  new Student(40, "Fred", "Leuschke", 25),
  new Student(41, "Hector", "Mayert", 89),
  new Student(42, "Jared", "Schultz", 52),
  new Student(43, "Else", "O'Hara", 56),
  new Student(44, "Keagan", "Hills", 25),
  new Student(45, "Ibrahim", "Cormier", 72),
  new Student(46, "Javier", "Larkin", 63),
  new Student(47, "Jarrell", "Murphy", 90),
  new Student(48, "Deondre", "Balistreri", 45),
  new Student(49, "Edythe", "Fadel", 29),
  new Student(50, "Gaetano", "Baumbach", 25)
];

@Injectable()
export class StudentMock {

  students: Student[] = [];


  constructor() {
    this.students = STUDENTS;
  }

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  updateStudent(student: Student): Observable<any> {
    this.students.forEach(studentObj => {
      if (student.getId() === studentObj.getId()) {
        studentObj.updateStudent(student);
      }
    });
    return of (true);
  }

  getLastId(): number {
    const Id = this.students.reverse()[0].getId();
    this.students.reverse();

    return Id;
  }

  addStudent(student): void {
    this.students.push(student);
  }

  getStudent(id: number): Observable<Student> {
    // tslint:disable-next-line:no-shadowed-variable
    const student = this.students.filter((student) => student.getId() === id);

    return of(student[0]);
  }
}
