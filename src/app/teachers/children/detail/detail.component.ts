import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InternalCommunicatorService} from "../../../services/internalCommunicator/internal-communicator.service";
import {TeacherService} from "../../../services/teacher.service";

@Component({
  selector: 'app-view',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public  teacher: object = {};

  constructor(
    private route: ActivatedRoute,
    private communicator: InternalCommunicatorService,
    private service: TeacherService) {
    const ObjectData = {title: 'Teachers\'s Detail Page'};
    this.communicator.goPage(ObjectData);
  }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get("id");
    const Id: number = parseInt(id, 10);
    this.service.getTeacher(Id)
      .subscribe(teachers => this.teacher = teachers);
  }

}
