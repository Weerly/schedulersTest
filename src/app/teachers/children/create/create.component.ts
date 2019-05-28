import { Component } from '@angular/core';
import {InternalCommunicatorService} from "../../../services/internalCommunicator/internal-communicator.service";
import {Student} from "../../../models/Student";
import {TeacherService} from "../../../services/teacher.service";
import {Teacher} from "../../../models/Teacher";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  id: number;
  age: string;
  firstName: string;
  lastName: string;
  jobTitle: string;

  constructor(
    private communicator: InternalCommunicatorService,
    private service: TeacherService) {
    const ObjectData = {title: 'Teacher\'s Creating Page'};
    this.communicator.goPage(ObjectData);
  }

  addTeacher() {
    const id = this.service.getLastId() + 1;
    const teacher: Teacher = new Teacher(
      id,
      this.firstName,
      this.lastName,
      this.jobTitle,
      parseInt(this.age, 10),
    );
    this.service.addTeacher(teacher);
  }
}
