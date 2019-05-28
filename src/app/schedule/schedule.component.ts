import { Component, OnInit } from '@angular/core';
import {InternalCommunicatorService} from "../services/internalCommunicator/internal-communicator.service";
import {ScheduleService} from "../services/schedule.service";
import {Schedule} from "../models/Schedule";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules: Schedule[] = [];
  constructor(private communicator: InternalCommunicatorService, private service: ScheduleService) {
    const ObjectData = {title: 'Schedule\'s Page'};
    this.communicator.goPage(ObjectData);
  }

  ngOnInit() {
    this.service.getSchedules()
      .subscribe((schedules) => this.schedules = schedules );
  }

}
