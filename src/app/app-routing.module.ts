import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupsComponent} from "./groups/groups.component";
import {TeachersComponent} from "./teachers/teachers.component";
import {ScheduleComponent} from "./schedule/schedule.component";

const routes: Routes = [
  {path: 'students' , loadChildren: './students/students.module#StudentsModule'},
  {path: 'groups' , component: GroupsComponent},
  {path: 'teachers' , component: TeachersComponent},
  {path: 'schedule' , component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
