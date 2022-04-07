import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaractersComponent } from './caracters/caracters.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'films',
        component: FilmsComponent
      },
      {
        path: 'characters',
        component: CaractersComponent

      },
      {
        path: '**',
        redirectTo: 'films'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
