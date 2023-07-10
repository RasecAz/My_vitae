import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListProjectsComponent } from './list-projects/list-projects.component'
import { SidebarComponent } from './sidebar/sidebar.component';
import { HojaDeVidaComponent } from './home/hoja-de-vida/hoja-de-vida.component';

 
const routes: Routes =
  [
    {
      path: "",
      component: HomeComponent,
      pathMatch: "full"
    },
    {
      path: "contact",
      component: ContactComponent
    },
    {
      path: "projects",
      component: ListProjectsComponent
    },
    {
      path: "nav",
      component: SidebarComponent
    },
    {
      path: "curriculum",
      component: HojaDeVidaComponent
    },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
