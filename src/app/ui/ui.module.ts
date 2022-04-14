import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { FilmsComponent } from './films/films.component';
import { CaractersComponent } from './caracters/caracters.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FilterPipeModule } from '../core/pipes/filter-pipe.module';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from '../core/pipes/gender-pipe.pipe';


@NgModule({
  declarations: [
    FilmsComponent,
    CaractersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    FilterPipeModule,
    FormsModule,
    SharedModule,
    RouterModule
    ],
  exports:[
    FilmsComponent,
    CaractersComponent,
    HomeComponent
  ]
})
export class UiModule { }
