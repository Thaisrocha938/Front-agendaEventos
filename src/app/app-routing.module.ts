import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { EventosCrudComponent } from "./views/eventos-crud/eventos-crud.component";

const routes: Routes = [{
  path:"",
  component:HomeComponent
},{
  path: "eventos",
  component:EventosCrudComponent
},{
  path: "eventos/create",
  component: EventoCreateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
