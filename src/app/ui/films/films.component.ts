import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film, IFilms } from 'src/app/core/constants/films.interface';
import { FilmsService } from 'src/app/core/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  filmData!:Film[];
  dataCharacters!:any[];
  characters: string[]=[];

  constructor(private filmService:FilmsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
    this.prueba();
  }

  fetchData():void{
    this.filmService.getUsers().subscribe((response) => {
      this.filmData = response.body?.results;
      this.dataCharacters = this.filmData.map(res => res.characters);
      setTimeout(() => console.log(this.dataCharacters),3000);
     // this.dataCharacters.map(resp =>  this.characters.push(resp))
     // setTimeout(() => console.log(this.characters),3000);
    })
  }

  prueba(){


  }

  go() {
    this.router.navigateByUrl('home/caracters');
}


}
