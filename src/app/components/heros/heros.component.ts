import { Component, OnInit } from '@angular/core';
import { Hero } from './../../types/hero';
import { HEROES } from '../../mock/heroes';

@Component({
    selector: 'app-heros',
    templateUrl: './heros.component.html',
    styleUrls: ['./heros.component.scss']
})

export class HerosComponent implements OnInit{

    heroes:Hero[];
    selectedHero:Hero;

    constructor(){ }

    ngOnInit(){
        this.heroes = HEROES;
    }

    onSelect(hero){
        this.selectedHero = hero;
        console.log(hero);
    }
}