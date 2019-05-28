import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InternalCommunicatorService} from "../../../services/internalCommunicator/internal-communicator.service";
import {TeacherService} from "../../../services/teacher.service";
import {Teacher} from "../../../models/Teacher";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  age: number;
  firstName: string;
  lastName: string;
  jobTitle: string;

  constructor(
    private route: ActivatedRoute,
    private communicator: InternalCommunicatorService,
    private service: TeacherService) {
    const ObjectData = {title: 'Teacher\'s Data Edit Page'};
    this.communicator.goPage(ObjectData);
  }

  saveData(id) {
    const teacher: Teacher = new Teacher(
      parseInt(id, 10),
      this.firstName,
      this.lastName,
      this.jobTitle,
      this.age,
    );
    this.service.updateTeacher(teacher);
  }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get("id");
    const Id: number = parseInt(id, 10);
    this.service.getTeacher(Id)
      .subscribe(teacher => {
        this.id = teacher.getId();
        this.firstName = teacher.getFirstName();
        this.lastName = teacher.getLastName();
        this.jobTitle = teacher.getJobTitle();
        this.age = teacher.getAge();
      } );
  }

}
