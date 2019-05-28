import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersComponent } from './teachers.component';
import { CreateComponent } from './children/create/create.component';
import {DetailComponent} from "./children/detail/detail.component";
import {EditComponent} from "./children/edit/edit.component";


const routes: Routes = [
  { path: '', component: TeachersComponent },
  { path: 'create', component: CreateComponent },
  { path: ':id', component: DetailComponent },
  { path: ':id/edit', component: EditComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class TeachersRoutingModule {}
