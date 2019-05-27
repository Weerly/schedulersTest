import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InternalCommunicatorService} from "../services/internalCommunicator/internal-communicator.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  pages = [
    'students',
    'groups',
    'schedule',
    'teachers'
  ];

  @Output() gotoPage: EventEmitter<object> = new EventEmitter();
  @Input() activePage: string;
  constructor(private communicator: InternalCommunicatorService) { }

  public goPage() {
    // let ObjectData = {title: 'Students\' Page', hasPageSubMenu: true};
    // this.gotoPage.emit(ObjectData);
  }

  ngOnInit() {
    console.log(this.activePage);
  }

}
