import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { ReplyComponent } from './reply/reply.component';
import { ShowComponent } from './show/show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [HomeComponent, CreateComponent, IndexComponent, ReplyComponent, ShowComponent, PlaceholderComponent],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
