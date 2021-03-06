import { Component } from '@angular/core';
import {InternalCommunicatorService} from "../../../services/internalCommunicator/internal-communicator.service";
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../models/Student";

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

  constructor(
    private communicator: InternalCommunicatorService,
    private service: StudentService) {
    const ObjectData = {title: 'Student\'s Creating Page'};
    this.communicator.goPage(ObjectData);
  }

  addStudent() {
    const id = this.service.getLastId() + 1;
    const student: Student = new Student(
      id,
      this.firstName,
      this.lastName,
      parseInt(this.age, 10),
    );
    this.service.addStudent(student);
  }
}
