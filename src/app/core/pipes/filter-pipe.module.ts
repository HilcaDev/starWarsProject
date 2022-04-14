import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter-pipe.pipe';
import { GenderPipe } from './gender-pipe.pipe';

@NgModule({
  declarations: [FilterPipe, GenderPipe],
  imports: [
    CommonModule
  ],
  exports: [FilterPipe, GenderPipe]
})
export class FilterPipeModule { }
