import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateComponent} from "./children/create/create.component";
import {DetailComponent} from "./children/detail/detail.component";
import {EditComponent} from "./children/edit/edit.component";
import {TeachersComponent} from "./teachers.component";
import {TeachersRoutingModule} from "./teachers-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [TeachersComponent, CreateComponent, DetailComponent, EditComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    FormsModule
  ]
})
export class TeachersModule { }
