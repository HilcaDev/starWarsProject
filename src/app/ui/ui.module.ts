import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { FilmsComponent } from './films/films.component';
import { CaractersComponent } from './caracters/caracters.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FilmsComponent,
    CaractersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    FilmsComponent,
    CaractersComponent
  ]
})
export class UiModule { }
