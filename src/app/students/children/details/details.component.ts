import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InternalCommunicatorService} from "../../../services/internalCommunicator/internal-communicator.service";
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../models/Student";

@Component({
  selector: 'app-view',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  student: Student;

  constructor(
    private route: ActivatedRoute,
    private communicator: InternalCommunicatorService,
    private service: StudentService) {
    const ObjectData = {title: 'Student\'s Detail Page', hasPageSubMenu: true};
    this.communicator.goPage(ObjectData);
  }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get("id");
    const Id: number = parseInt(id, 10);
    this.service.getStudent(Id)
      .subscribe(students => this.student = students);
  }

}
