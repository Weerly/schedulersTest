import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupsComponent} from "./groups/groups.component";
import {ScheduleComponent} from "./schedule/schedule.component";

const routes: Routes = [
  {path: 'students' , loadChildren: './students/students.module#StudentsModule'},
  {path: 'groups' , component: GroupsComponent},
  {path: 'groups/:id/schedule' , component: GroupsComponent},
  {path: 'teachers' , loadChildren: './teachers/teachers.module#TeachersModule'},
  {path: 'schedule' , component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


