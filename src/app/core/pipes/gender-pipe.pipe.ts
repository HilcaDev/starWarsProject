import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../constants/characters.interface';

@Pipe({
  name: 'genderFilter'
})
export class GenderPipe implements PipeTransform {

  transform(data: Character[], term: string): any[] {

    if (term === undefined) {
      return data;
    }

    return data.filter(res => {
      return res.gender.toLowerCase().includes(term.toLowerCase());
    });
  }
}
