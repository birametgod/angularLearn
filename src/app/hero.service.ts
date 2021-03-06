import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs";
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHero(id:number) : Observable<Hero>{
    this.messageService.add(`recuperer hero ${id}`);
    return of(HEROES.find(hero => hero.id === id ))
  }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add("HeroService:  donnees");
    return of(HEROES);
  }

}
