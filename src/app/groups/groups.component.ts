import { Component, OnInit } from '@angular/core';
import {InternalCommunicatorService} from "../services/internalCommunicator/internal-communicator.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private communicator: InternalCommunicatorService) {
    let ObjectData = {title: 'Groups\' Page', hasPageSubMenu: false};
    this.communicator.goPage(ObjectData);
  }

  ngOnInit() {
  }

}
