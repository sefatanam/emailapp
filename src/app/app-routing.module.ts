import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./auth/guards/auth.guard";

const routes: Routes = [
  {
    path: 'inbox',
    canLoad: [AuthGuard],
    loadChildren: () => import('./inbox/inbox.module').then(modules => modules.InboxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
