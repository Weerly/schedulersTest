import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ApiComunicatorService} from "./services/api-comunicator/api-comunicator.service";
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { GroupsComponent } from './groups/groups.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {HttpClientModule} from "@angular/common/http";
import { BlockHeightDirective } from './directives/block-height.directive';
import {FormsModule} from "@angular/forms";
import {StudentMock} from "./mocking/Students";
import {ScheduleMock} from "./mocking/Schedules";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyHeaderComponent,
    MyFooterComponent,
    GroupsComponent,
    TeachersComponent,
    ScheduleComponent,
    BlockHeightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiComunicatorService, MyHeaderComponent, StudentMock, ScheduleMock],
  bootstrap: [AppComponent]
})
export class AppModule { }
