import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InternalCommunicatorService} from "../../../services/internalCommunicator/internal-communicator.service";
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-view',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 public  student: object = {};

  constructor(
    private route: ActivatedRoute,
    private communicator: InternalCommunicatorService,
    private service: StudentService) {
    let ObjectData = {title: 'Student\'s Detail Page', hasPageSubMenu: true};
    this.communicator.goPage(ObjectData);
  }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    let Id: number = parseInt(id);
    this.service.getStudent(Id)
      .subscribe(students => this.student = students);
    console.log(id);
  }

}
