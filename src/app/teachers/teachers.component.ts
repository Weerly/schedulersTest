import { Component, OnInit } from '@angular/core';
import {InternalCommunicatorService} from "../services/internalCommunicator/internal-communicator.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(private communicator: InternalCommunicatorService) {
    let ObjectData = {title: 'Teachers\' Page', hasPageSubMenu: true};
    this.communicator.goPage(ObjectData);
  }

  ngOnInit() {
  }

}
