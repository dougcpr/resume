import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// View Components
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
