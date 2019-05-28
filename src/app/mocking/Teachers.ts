import {Teacher} from "../models/Teacher";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

const TEACHERS: Teacher[] = [
  new Teacher(1, "Demarco", "Barton", "Loading Machine Operator", 21),
  new Teacher(2, "Zachery", "Greenfelder", "Human Resources Assistant", 51),
  new Teacher(3, "Magnus", "Kuhn", "Central Office Operator", 72),
  new Teacher(4, "Adah", "Nolan", "Political Scientist", 63),
  new Teacher(5, "Dwight", "West", "Glass Cutting Machine Operator", 90),
  new Teacher(6, "Ibrahim", "Walsh", "Surveying Technician", 46),
  new Teacher(7, "Vicente", "Schumm", "Accountant", 91),
  new Teacher(8, "Jeffery", "Goyette", "Human Resource Director", 79),
  new Teacher(9, "Junior", "Rath", "Maintenance Equipment Operator", 48),
  new Teacher(10, "Oswald", "Fay", "Government Service Executive", 74),
  new Teacher(11, "Dejah", "DuBuque", "Stonemason", 38),
  new Teacher(12, "Elmira", "Will", "Emergency Management Specialist", 64),
  new Teacher(13, "Ivory", "Lemke", "Program Director", 75),
  new Teacher(14, "Corene", "Schinner", "Scientific Photographer", 85),
  new Teacher(15, "Elfrieda", "Hyatt", "School Social Worker", 81),
  new Teacher(16, "Donny", "Kassulke", "Public Transportation Inspector", 82),
  new Teacher(17, "Lance", "Rogahn", "Farm Equipment Mechanic", 79),
  new Teacher(18, "Josianne", "Gorczany", "Embossing Machine Operator", 38),
  new Teacher(19, "Noe", "Medhurst", "Refractory Materials Repairer", 51),
  new Teacher(20, "Nat", "Dickinson", "Multi-Media Artist", 43),
  new Teacher(21, "Katarina", "Zieme", "Meter Mechanic", 83),
  new Teacher(22, "Makayla", "Lakin", "Residential Advisor", 66),
  new Teacher(23, "Brenna", "Wiza", "Elementary School Teacher", 78),
  new Teacher(24, "Benjamin", "Hermann", "Philosophy and Religion Teacher", 85),
  new Teacher(25, "Neva", "Purdy", "Rock Splitter", 68),
  new Teacher(26, "Wendy", "Gerhold", "Rail Car Repairer", 48),
  new Teacher(27, "Derrick", "Schumm", "Anesthesiologist", 83),
  new Teacher(28, "Nakia", "Herman", "Dragline Operator", 62),
  new Teacher(29, "Esperanza", "Lindgren", "Transportation Inspector", 56),
  new Teacher(30, "Joanie", "Sipes", "Central Office and PBX Installers", 18),
  new Teacher(31, "Molly", "Wiegand", "Metal Molding Operator", 90),
  new Teacher(32, "Afton", "Renner", "Glazier", 78),
  new Teacher(33, "Bryana", "Okuneva", "Transformer Repairer", 63),
  new Teacher(34, "Willa", "Hagenes", "Nursing Aide", 27),
  new Teacher(35, "Ahmad", "Stamm", "Railroad Conductors", 90),
  new Teacher(36, "Lilyan", "Feest", "Ship Captain", 21),
  new Teacher(37, "Abbey", "Hauck", "Aircraft Engine Specialist", 75),
  new Teacher(38, "Ernestine", "Marquardt", "Etcher", 47),
  new Teacher(39, "Sydney", "Medhurst", "Movie Director oR Theatre Director", 80),
  new Teacher(40, "Rebeka", "Collins", "Oral Surgeon", 74),
  new Teacher(41, "Dimitri", "Fahey", "Agricultural Sales Representative", 39),
  new Teacher(42, "Rod", "Toy", "Cultural Studies Teacher", 71),
  new Teacher(43, "Moriah", "Cormier", "Air Crew Officer", 23),
  new Teacher(44, "Sigrid", "Grimes", "Fabric Pressers", 27),
  new Teacher(45, "Fabiola", "Dickinson", "Separating Machine Operators", 85),
  new Teacher(46, "Omari", "Conroy", "Copy Machine Operator", 98),
  new Teacher(47, "Hilario", "Lehner", "Animal Husbandry Worker", 68),
  new Teacher(48, "Mary", "Cruickshank", "Material Movers", 68),
  new Teacher(49, "Dianna", "Bartoletti", "Plasterer OR Stucco Mason", 27),
  new Teacher(50, "Landen", "Herzog", "Camera Operator", 76)
];

@Injectable()
export class TeacherMock {

  teachers: Teacher[];
  constructor() {
    this.teachers = TEACHERS;
  }

  getTeachers(): Observable<Teacher[]> {
    return of(this.teachers);
  }

  addTeacher(teacher): void {
    this.teachers.push(teacher);
  }

  updateTeacher(teacher: Teacher): Observable<any> {
    this.teachers.forEach((teacherObj) => {
      if (teacherObj.getId() === teacher.getId()) {
        // return  teacher;
        teacherObj.updateTeacher(teacher);
      }
    });

    return of (true);
  }

  getLastId(): number {
    const Id = this.teachers.reverse()[0].getId();
    this.teachers.reverse();

    return Id;
  }

  getTeacher(id: number): Observable<Teacher> {
    // tslint:disable-next-line:no-shadowed-variable
    const teacher = this.teachers.filter((teacher) => teacher.getId() === id);

    return of(teacher[0]);
  }
}
