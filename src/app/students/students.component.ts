import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {InternalCommunicatorService} from "../services/internalCommunicator/internal-communicator.service";
import {AppComponent} from "../app.component";
import {ApiComunicatorService} from "../services/api-comunicator/api-comunicator.service";
import {StudentService} from "../services/student.service";
import {Student} from "../models/Student";

@Component({
  selector: 'app-student-component',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnChanges {

  students: Student[] = [];

  constructor(private communicator: InternalCommunicatorService, private service: StudentService) {
    let ObjectData = {title: 'Students\' Page', hasPageSubMenu: true};
    this.communicator.goPage(ObjectData);
  }

  deleteStudent(id) {
    alert(id);
  }

  ngOnInit() {
    this.service.getStudents()
      .subscribe(students => this.students = students);
  }

  ngOnChanges(): void {
    console.log(this);
  }

}
