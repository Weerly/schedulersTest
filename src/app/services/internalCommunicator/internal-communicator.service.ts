import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalCommunicatorService {
  private hasPageSubMenu: boolean;
  private visitingPage: string;
  gotoPage: EventEmitter<object> = new EventEmitter();

  constructor() { }

  public goPage(ObjectData) {
    // let ObjectData = {title: 'Students\' Page', hasPageSubMenu: true};
    this.gotoPage.emit(ObjectData);
  }

  setHasPageSubMenu(hasPageSubMenu) {
    this.hasPageSubMenu = hasPageSubMenu;
  }

  getHasPageSubMenu() {
    return this.hasPageSubMenu;
  }

  setVisitingPage(visitingPage) {
    this.visitingPage = visitingPage;
  }

  getVisitingPage() {
    return this.visitingPage;
  }
}
