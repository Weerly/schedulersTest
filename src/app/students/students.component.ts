import {Component,   OnInit} from '@angular/core';
import {InternalCommunicatorService} from "../services/internalCommunicator/internal-communicator.service";
import {StudentService} from "../services/student.service";
import {Student} from "../models/Student";

@Component({
  selector: 'app-student-component',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(
    private communicator: InternalCommunicatorService,
    private service: StudentService) {
    const ObjectData = {title: 'Students\' Page', visitingPage: 'students'};
    this.communicator.goPage(ObjectData);
  }

  ngOnInit() {
    this.service.getStudents()
      .subscribe(students => this.students = students);
  }
}
