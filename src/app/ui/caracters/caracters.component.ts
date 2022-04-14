import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../core/services/characters.service';
import { Character } from '../../core/constants/characters.interface';
import { HttpClient } from '@angular/common/http';
import { ColorEyes, Gender } from '../../core/constants/fiter.constants';

@Component({
  selector: 'app-caracters',
  templateUrl: './caracters.component.html',
  styleUrls: ['./caracters.component.scss']
})
export class CaractersComponent implements OnInit {

  characterData!: Character[];
  colorEyes = ColorEyes;
  gender = Gender;
  dataFilms!: any;
  value!: string;
  page: number = 0;

  constructor(private characterServices: CharactersService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.characterServices.getAll().subscribe((response) => {
      this.characterData = response.body?.results;
      this.dataFilms = this.characterData.map(res => res.films);
    })
  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 5;
    }
  }
}
