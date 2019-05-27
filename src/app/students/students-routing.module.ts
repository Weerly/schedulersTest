import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';
import { CreateComponent } from './children/create/create.component'
import {DetailsComponent} from "./children/details/details.component";
import {EditComponent} from "./children/edit/edit.component";


const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'create', component: CreateComponent },
  { path: ':id', component: DetailsComponent },
  { path: ':id/edit', component: EditComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class StudentsRoutingModule {}
