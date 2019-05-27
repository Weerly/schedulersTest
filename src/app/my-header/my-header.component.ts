import {Component, Input, OnInit} from '@angular/core';
import {InternalCommunicatorService} from "../services/internalCommunicator/internal-communicator.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  constructor(private communicator: InternalCommunicatorService) {

  }

  @Input() visitingPageTitle: string;
  setVisitingPage(visitingPage) {
    this.visitingPageTitle = visitingPage;
  }

  ngOnInit() {
    // this.hasSubMenu = this.communicator.getHasPageSubMenu();
    // this.visitingPage = this.communicator.getVisitingPage();
    console.log(this.visitingPageTitle);
    // console.log(this.hasSubMenu);
  }

}
