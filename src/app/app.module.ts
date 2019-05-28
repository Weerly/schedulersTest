import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { GroupsComponent } from './groups/groups.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {HttpClientModule} from "@angular/common/http";
import { BlockHeightDirective } from './directives/block-height.directive';
import {FormsModule} from "@angular/forms";
import {StudentMock} from "./mocking/Students";
import {ScheduleMock} from "./mocking/Schedules";
import {TeacherMock} from "./mocking/Teachers";
import {GroupMock} from "./mocking/Groups";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyHeaderComponent,
    MyFooterComponent,
    GroupsComponent,
    ScheduleComponent,
    BlockHeightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ MyHeaderComponent, StudentMock, ScheduleMock, TeacherMock, GroupMock],
  bootstrap: [AppComponent]
})
export class AppModule { }
