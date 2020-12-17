import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PlaceholderComponent} from "./placeholder/placeholder.component";
import {ShowComponent} from "./show/show.component";
import {EmailResolverService} from "./services/email-resolver.service";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'not-found', component: NotFoundComponent},
      {path: ':id', component: ShowComponent, resolve: {email: EmailResolverService}},
      {path: '', component: PlaceholderComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule {
}
