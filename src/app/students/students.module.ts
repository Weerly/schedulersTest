import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StudentsComponent} from "./students.component";
import {CreateComponent} from "./children/create/create.component";
import {DetailsComponent} from "./children/details/details.component";
import {StudentsRoutingModule} from "./students-routing.module";
import { EditComponent } from './children/edit/edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [StudentsComponent, CreateComponent, DetailsComponent, EditComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ]
})
export class StudentsModule { }
