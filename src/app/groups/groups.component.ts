import { Component, OnInit } from '@angular/core';
import {InternalCommunicatorService} from "../services/internalCommunicator/internal-communicator.service";
import {Group} from "../models/Group";
import {GroupsService} from "../services/groups.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Group[] = [];
  constructor(private communicator: InternalCommunicatorService, private service: GroupsService) {
    const ObjectData = {title: 'Groups\' Page'};
    this.communicator.goPage(ObjectData);
  }

  ngOnInit() {
    this.service.getGroups()
      .subscribe((groups) => this.groups = groups );
  }

}
