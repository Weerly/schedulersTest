import {Component, OnInit} from '@angular/core';
import {MyHeaderComponent} from "./my-header/my-header.component";
import {MyFooterComponent} from "./my-footer/my-footer.component";
import {windowTime} from "rxjs/operators";
import {InternalCommunicatorService} from "./services/internalCommunicator/internal-communicator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Students\' Scheduler';
  visitingPageTitle: string = 'Main Page';
  visitingPage: string;

  constructor(private communicator: InternalCommunicatorService) {
    this.communicator.gotoPage.subscribe(data => this.onDirection(data));
  }

  onDirection(visitingPageDataObject) {
    this.visitingPageTitle = visitingPageDataObject.title;
    this.visitingPage = visitingPageDataObject.visitingPage;
    this.setDocumentTitle(this.visitingPageTitle);

  }

  setDocumentTitle = (title: string) => {
    window.document.title = this.title + ' - ' + title;
  };

  ngOnInit() {
    this.setDocumentTitle(this.title);
  }
}
