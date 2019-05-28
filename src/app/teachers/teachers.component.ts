import { Component, OnInit } from '@angular/core';
import {InternalCommunicatorService} from "../services/internalCommunicator/internal-communicator.service";
import {Teacher} from "../models/Teacher";
import {TeacherService} from "../services/teacher.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] = [];

  constructor(private communicator: InternalCommunicatorService, private service: TeacherService) {
    const ObjectData = {title: 'Teachers\' Page', visitingPage: 'teachers'};
    this.communicator.goPage(ObjectData);
  }

  ngOnInit() {
    this.service.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
  }
}
