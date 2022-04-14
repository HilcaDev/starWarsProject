import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../constants/characters.interface';

@Pipe({
  name: 'colorFilter'
})
export class FilterPipe implements PipeTransform {

  transform(data: Character[], term: string, page: number = 0): any[] {

    if (term === undefined || term === '') {
      return data.slice(page, page + 5);
    }

    const filterCharacters = data.filter(res => res.eye_color.toLowerCase().includes(term.toLowerCase()));
    return filterCharacters.slice(page, page + 5)
  }
}
