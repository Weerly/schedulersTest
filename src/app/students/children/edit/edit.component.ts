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
      let ObjectData = {title: 'Student\'s Data Edit Page', hasPageSubMenu: true};
      this.communicator.goPage(ObjectData);
  }

  saveData(id) {
    let student: Student = new Student(
      parseInt(id),
      this.firstName,
      this.lastName,
      this.age,
    );
    this.service.updateStudent(student);
  }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    let Id: number = parseInt(id);
    this.service.getStudent(Id)
      .subscribe(student => {
        let obj = student.getObject();
        this.id = obj.id;
        this.firstName = obj.first_name;
        this.lastName = obj.last_name;
        this.age = obj.age;
      } );
    console.log(id);
  }

}
