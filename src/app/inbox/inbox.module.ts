import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InboxRoutingModule} from './inbox-routing.module';
import {HomeComponent} from './home/home.component';
import {CreateComponent} from './create/create.component';
import {IndexComponent} from './index/index.component';
import {ReplyComponent} from './reply/reply.component';
import {ShowComponent} from './show/show.component';
import {PlaceholderComponent} from './placeholder/placeholder.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SharedModule} from "../shared/shared.module";
import {FormComponent} from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    IndexComponent,
    ReplyComponent,
    ShowComponent,
    PlaceholderComponent,
    NotFoundComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class InboxModule {
}
