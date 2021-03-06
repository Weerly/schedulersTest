import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InternalCommunicatorService} from "../../../services/internalCommunicator/internal-communicator.service";
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../models/Student";

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

  constructor(
    private route: ActivatedRoute,
    private communicator: InternalCommunicatorService,
    private service: StudentService) {
      const ObjectData = {title: 'Student\'s Data Edit Page'};
      this.communicator.goPage(ObjectData);
  }

  saveData(id) {
    const student: Student = new Student(
      parseInt(id, 10),
      this.firstName,
      this.lastName,
      this.age,
    );
    this.service.updateStudent(student);
  }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get("id");
    const Id: number = parseInt(id, 10);
    this.service.getStudent(Id)
      .subscribe(student => {
        this.id = student.getId();
        this.firstName = student.getFirstName();
        this.lastName = student.getLastName();
        this.age = student.getAge();
      } );
  }

}
