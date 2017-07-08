import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// View Components
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";
import { AddProjectComponent } from "./views/add-project/add-project.component";

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
    path: 'add_project',
    component: AddProjectComponent,
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
